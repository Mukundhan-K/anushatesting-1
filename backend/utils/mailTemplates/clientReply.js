function clientReplyTemplate({ name }) {

  const saffron = "#E68900";
  const green = "#026f41";

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

  <!-- TOP LOGO BAR -->
  <tr>
    <td style="background:#ffffff;padding:18px 30px;border-bottom:1px solid #eee">
      <table width="100%">
        <tr>
          <td>
            <img src="https://www.anushastructures.in/logo_construction2.png"
                 height="48" alt="Anusha Structures" style="display:block" />
          </td>
          <td align="right">
            <span style="
              background:${saffron};
              color:#fff;
              padding:6px 14px;
              border-radius:20px;
              font-size:13px;
              font-weight:600
            ">
              Enquiry Received
            </span>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <!-- HERO -->
  <tr>
    <td style="
      background:linear-gradient(135deg,#026f41,#014d2d);
      padding:40px 30px
    ">
      <h1 style="
        color:#ffffff;
        margin:0 0 10px;
        font-size:30px;
        font-weight:700
      ">
        Thank You, <span style="color:${saffron}">${name}</span>
      </h1>

      <p style="
        color:#d1fae5;
        font-size:16px;
        margin:0;
        max-width:520px
      ">
        We’ve successfully received your enquiry and appreciate your interest in
        Anusha Structures.
      </p>
    </td>
  </tr>

  <!-- CONTENT -->
  <tr>
    <td style="padding:35px 30px;color:#374151;font-size:16px;line-height:1.7">

      <p>
        Our team is currently reviewing your request. One of our construction
        experts will reach out to you shortly to understand your requirements
        and guide you further.
      </p>

      <p>
        At <b style="color:${green}">Anusha Structures</b>, we specialize in
        delivering premium construction solutions with quality, transparency,
        and on-time execution.
      </p>

      <!-- CONTACT CARD -->
      <div style="
        margin-top:30px;
        padding:20px;
        background:#f8fafc;
        border-radius:12px;
        border-left:5px solid ${saffron}
      ">
        <p style="margin:0 0 10px;font-weight:600;color:#026f41">
          Need immediate assistance?
        </p>

        <p style="margin:0;font-size:16px">
          📞 <b>Call:</b> +91 76959 50724 <br />
          💬 <b>WhatsApp:</b> +91 76959 50724 <br />
          📩 <b>Email:</b> anushastructures02@gmail.com
        </p>
      </div>

    </td>
  </tr>

  <!-- CTA BUTTONS -->
  <tr>
    <td style="padding:30px;text-align:center;background:#f8fafc">

      <a href="tel:+917695950724"
         style="
          background:${green};
          color:#ffffff;
          padding:14px 26px;
          border-radius:30px;
          font-weight:600;
          text-decoration:none;
          margin-right:12px;
          display:inline-block
         ">
        📞 Call Us
      </a>

      <a href="https://api.whatsapp.com/send?phone=7695950724&text=Hi!%20Can%20I%20get%20more%20information%20on%20Construction?%20%23JYNQ0X"
         style="
          background:#25D366;
          color:#ffffff;
          padding:14px 26px;
          border-radius:30px;
          font-weight:600;
          text-decoration:none;
          display:inline-block
         ">
        💬 WhatsApp Us
      </a>

    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td style="
      background:#026f41;
      padding:22px;
      text-align:center;
      color:#d1fae5;
      font-size:13px
    ">
      © ${new Date().getFullYear()} Anusha Structures · Building Trust with Quality<br />
      This is an automated acknowledgement email
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

module.exports = clientReplyTemplate;
