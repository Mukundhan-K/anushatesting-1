function adminEmailTemplate({ name, email, subject, phone, message }) {


  const saffron = "#E68900";
  const green = "#026f41";
  const bg = "#f0f2f5";

  const rows = Object.entries(message)
    .map(
      ([k, v]) => `
      <tr>
        <td style="
          padding:14px;
          background:#f9fafb;
          border-bottom:1px solid #e5e7eb;
          font-weight:600;
          color:#026f41;
          width:35%;
          text-transform:capitalize;
        ">
          ${k.replace(/_/g, " ")}
        </td>

        <td style="
          padding:14px;
          border-bottom:1px solid #e5e7eb;
          color:#111827;
          line-height:1.6;
        ">
          ${v}
        </td>
      </tr>
    `
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px">

<!-- CONTAINER -->
<table width="640" cellpadding="0" cellspacing="0"
  style="background:#ffffff;border-radius:16px;overflow:hidden;
         box-shadow:0 20px 50px rgba(0,0,0,.08)">

  <!-- HERO HEADER -->

  <tr>
      <td style="background: #ffffff; padding: 15px 30px; border-radius: 12px 12px 0 0; border-bottom: 1px solid #eee;">
        <table width="100%">
          <tr>
            <td>
              <img src="https://www.anushastructures.in/logo_construction2.png" height="48" alt="Logo" style="display: block;">
            </td>
            <td align="right">
              <span style="
              background:#E68900;
              color:#fff;
              padding:6px 14px;
              border-radius:20px;
              font-size:13px;
              font-weight:600
            ">
              Mail from Anusha Website
            </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

  <tr>
    <td style="background:linear-gradient(135deg,#026f41,#014d2d);
               padding:35px 30px;text-align:left">

      <h2 style="color: #ffffff; margin: 0; font-size: 28px; margin:25px 0 8px">
        New 
        <span style="font-weight: 700; color: ${saffron};">Project</span> 
        Inquiry
      </h2>

      <p style="color:#d1fae5;font-size:16px;margin:0">
        A potential client has submitted a new enquiry
      </p>

    </td>
  </tr>

  <!-- META INFO -->
  <tr >
    <td style="padding:15px 30px;background:#f8fafc;vertical-align: top; padding-right: 20px; border-right: 1px solid #edf2f7;padding:30px;">

        <h3 style="font-size: 13px; color: ${saffron}; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">Contact Profile</h3>
        <div style="margin-top: 20px;">
          <div style="font-size: 22px; color: #1a202c; font-weight: 700;">${name}</div>
          <div style="margin: 10px 0;display:flex;flex-direction:column;gap:10px;">
            <a href="mailto:${email}" style="color: ${green}; text-decoration: none; font-size: 24px; font-weight: 500;">📩 ${email}</a>
            <a href="tel:${phone}" style="color: ${green}; text-decoration: none; font-size: 24px; font-weight: 500;">📞 ${phone}</a>
          </div>
        </div>

    </td>
  </tr>

  <tr >
      <td width="100%" style="vertical-align: top; padding:10px 30px;">
          <h3 style="font-size: 13px; color: ${saffron}; text-transform: uppercase; letter-spacing: 1px; margin-top: 0;">Subject </h3>
          <div style="margin-top: 15px;">
            ${subject}
          </div>
      </td>
  </tr>

  <!-- DETAILS CARD -->
  <tr>
    <td style="padding:30px">

      <h2 style="
        font-size:20px;
        margin:0 0 18px;
        color:#026f41;
        border-left:5px solid #E68900;
        padding-left:12px
      ">
        Enquiry Details
      </h2>

      <table width="100%" cellpadding="0" cellspacing="0"
        style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
        ${rows}
      </table>

    </td>
  </tr>

  <!-- CTA SECTION -->
  <tr>
    <td style="padding:30px;background:#f8fafc;text-align:center">

      <p style="font-size:16px;color:#374151;margin-bottom:20px">
        Respond quickly to convert this lead
      </p>

      <a href="tel:${phone}"
         style="
          background:#026f41;
          color:#ffffff;
          padding:14px 26px;
          border-radius:30px;
          font-weight:600;
          text-decoration:none;
          margin-right:12px;
          display:inline-block
         ">
        📞 Call Client
      </a>

      <a href="https://api.whatsapp.com/send?phone=${phone}&text=Hi!%20How%20Can%20I%20help%20you%20${name}"
         style="
          background:#25D366;
          color:#ffffff;
          padding:14px 26px;
          border-radius:30px;
          font-weight:600;
          text-decoration:none;
          display:inline-block
         ">
        💬 WhatsApp
      </a>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="
      background:#026f41;
      padding:20px;
      text-align:center;
      color:#d1fae5;
      font-size:13px
    ">
      © ${new Date().getFullYear()} Anusha Structures · Premium Construction Solutions<br />
      This enquiry was generated from your website contact form
    </td>
  </tr>

</table>
<!-- END CONTAINER -->

</td>
</tr>
</table>

</body>
</html>
`;
}

module.exports = adminEmailTemplate;
