import { NextResponse } from "next/server";
import { google } from "googleapis";

import { buildEmailHtml } from "./emailTemplate";

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
    const subjectText = `New Inquiry: ${name} - ${service}`;
    const subject = `=?UTF-8?B?${Buffer.from(subjectText).toString("base64")}?=`;

    const detailsEscaped = details
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    const htmlBody = buildEmailHtml({ name, email, service, detailsEscaped });

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
