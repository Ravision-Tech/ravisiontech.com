import { NextResponse } from "next/server";
import { google } from "googleapis";

const TO = process.env.CONTACT_EMAIL_TO!;

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, service, details, captchaToken, captchaVersion } = await req.json();

    if (!firstName || !email || !service || !details) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const secretKey =
      captchaVersion === "v2" ? process.env.RECAPTCHA_V2_SECRET_KEY : process.env.RECAPTCHA_V3_SECRET_KEY;

    const captchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${captchaToken}`,
    });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
    }

    if (captchaVersion === "v3" && captchaData.score < 0.5) {
      return NextResponse.json({ requireChallenge: true });
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/gmail.send"],
      clientOptions: {
        subject: TO,
      },
    });

    const gmail = google.gmail({ version: "v1", auth });

    const name = [firstName, lastName].filter(Boolean).join(" ");
    const subjectText = `New inquiry from ${name} - ${service}`;
    const subject = `=?UTF-8?B?${Buffer.from(subjectText).toString("base64")}?=`;

    const detailsEscaped = details
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    const htmlBody = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;padding:32px 0;"><tr><td align="center"><table width="560" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:8px;"><tr><td bgcolor="#0f172a" style="background-color:#0f172a;padding:24px 32px;border-radius:8px 8px 0 0;"><p style="margin:0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Ravision Tech</p><p style="margin:6px 0 0;font-size:22px;font-weight:bold;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">New Contact Form Inquiry</p></td></tr><tr><td style="padding:32px;background-color:#ffffff;"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-bottom:20px;"><p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">From</p><p style="margin:0;font-size:17px;font-weight:bold;color:#0f172a;font-family:Arial,Helvetica,sans-serif;">${name}</p><p style="margin:3px 0 0;font-size:14px;font-family:Arial,Helvetica,sans-serif;"><a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a></p></td></tr><tr><td style="padding-bottom:24px;padding-top:4px;border-bottom:2px solid #e2e8f0;"><p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Service Requested</p><p style="margin:0;font-size:15px;color:#0f172a;font-family:Arial,Helvetica,sans-serif;">${service}</p></td></tr><tr><td style="padding-top:24px;"><p style="margin:0 0 12px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Project Details</p><p style="margin:0;font-size:15px;line-height:1.7;color:#334155;font-family:Arial,Helvetica,sans-serif;">${detailsEscaped}</p></td></tr></table></td></tr></table></td></tr></table></body></html>`;

    const plainBody = [
      `New Contact Form Inquiry`,
      `==================`,
      ``,
      `From:    ${name} <${email}>`,
      `Service: ${service}`,
      ``,
      `Details`,
      `-------`,
      details,
      ``,
    ].join("\n");

    const boundary = "----=_MimeBoundary_ravisiontech";

    const encode = (s: string) =>
      Buffer.from(s)
        .toString("base64")
        .match(/.{1,76}/g)!
        .join("\n");

    const raw = Buffer.from(
      [
        `From: ${name} via Contact Form <${TO}>`,
        `To: ${TO}`,
        `Reply-To: ${name} <${email}>`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/alternative; boundary="${boundary}"`,
        ``,
        `--${boundary}`,
        `Content-Type: text/plain; charset=utf-8`,
        `Content-Transfer-Encoding: base64`,
        ``,
        encode(plainBody),
        ``,
        `--${boundary}`,
        `Content-Type: text/html; charset=utf-8`,
        `Content-Transfer-Encoding: base64`,
        ``,
        encode(htmlBody),
        ``,
        `--${boundary}--`,
      ].join("\n")
    )
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({ userId: "me", requestBody: { raw } });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
