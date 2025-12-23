const nodemailer = require("nodemailer");
const path = require("path");
const adminEmailTemplate = require(path.join(__dirname, "mailTemplates", "adminMail.js"));
const clientReplyTemplate = require(path.join(__dirname, "mailTemplates", "clientReply.js"));
const { throwError } = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));

async function sendMail({ name, email, subject, phone, message}) {
  console.log("ins mail : ", name, email, subject, phone, message);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,         // smtp.gmail.com
      port: process.env.MAIL_PORT,         // 587
      secure: false,
      auth: {
        user: process.env.MAIL_USER,       // your mail
        pass: process.env.MAIL_PASS,       // app password
      },
    });

  /** ADMIN MAIL **/
    const mailOptions = {
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: process.env.RECEIVER_MAIL,       // where you receive mail
      replyTo: email,
      subject: subject || "New Contact Form Message",
      html: adminEmailTemplate({name, email, subject, phone, message})
    };

    await transporter.sendMail(mailOptions);

  /** CLIENT AUTO-REPLY **/
    await transporter.sendMail({
      from: `"Anusha Structures" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "We received your enquiry",
      html: clientReplyTemplate({ name: name }),
    });

  // retrun 
    return true;

  } catch (error) {
    console.error("Mail error:", error.message);
    return throwError("Failed to send email. Please try again later.", 500);
  }
}

async function sendNormalMail({ email, subject, html}) {
  console.log("ins mail : ",  email, subject, html);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,         // smtp.gmail.com
      port: process.env.MAIL_PORT,         // 587
      secure: false,
      auth: {
        user: process.env.MAIL_USER,       // your mail
        pass: process.env.MAIL_PASS,       // app password
      },
    });
  
  /** Password Reset Email **/
    await transporter.sendMail({
      from: `"Anusha Structures" <${process.env.MAIL_USER}>`,
      to: email,
      subject: subject || "Password Reset Email",
      html: html,
    });

  // retrun 
    return true;

  } catch (error) {
    console.error("Mail error:", error.message);
    return throwError("Failed to send email. Please try again later.", 500);
  }
}

module.exports = {sendMail, sendNormalMail};
