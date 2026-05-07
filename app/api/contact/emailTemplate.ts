interface EmailTemplateProps {
  name: string;
  email: string;
  service: string;
  detailsEscaped: string;
}

export function buildEmailHtml({ name, email, service, detailsEscaped }: EmailTemplateProps) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:8px;">

          <tr>
            <td bgcolor="#0f172a" style="background-color:#0f172a;padding:24px 32px;border-radius:8px 8px 0 0;">
              <p style="margin:0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">
                Ravision Tech
              </p>
              <p style="margin:6px 0 0;font-size:22px;font-weight:bold;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
                New Contact Form Inquiry
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;background-color:#ffffff;border-radius:0 0 8px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">From</p>
                    <p style="margin:0;font-size:17px;font-weight:bold;color:#0f172a;font-family:Arial,Helvetica,sans-serif;">${name}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:20px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Email</p>
                    <p style="margin:3px 0 0;font-size:14px;font-family:Arial,Helvetica,sans-serif;">
                      <a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom:24px;padding-top:4px;border-bottom:2px solid #e2e8f0;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Service Requested</p>
                    <p style="margin:0;font-size:15px;color:#0f172a;font-family:Arial,Helvetica,sans-serif;">${service}</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding-top:24px;">
                    <p style="margin:0 0 12px;font-size:11px;font-weight:bold;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;font-family:Arial,Helvetica,sans-serif;">Project Details</p>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#334155;font-family:Arial,Helvetica,sans-serif;">${detailsEscaped}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
