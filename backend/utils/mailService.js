const nodemailer = require("nodemailer");
const path = require("path");
const adminEmailTemplate = require(path.join(__dirname, "mailTemplates", "adminMail.js"));
const clientReplyTemplate = require(path.join(__dirname, "mailTemplates", "clientReply.js"));
const { throwError } = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));

// Create transporter once and reuse it
let transporter = null;

async function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail', // Use service instead of host/port
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Add these for cloud hosting
        pool: true,
        maxConnections: 1,
        rateDelta: 20000,
        rateLimit: 5,
      // Increase timeout
        connectionTimeout: 60000, // 60 seconds
        greetingTimeout: 30000,
        socketTimeout: 60000,
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log("✅ SMTP connection successful");
    } catch (error) {
      console.error("❌ SMTP connection failed:", error);
      transporter = null; // Reset so it can retry next time
      throw new Error(`SMTP Error: ${error.message}`);
    }
  }
  return transporter;
}

async function sendMail({ name, email, subject, phone, message}) {
  console.log("ins mail : ", name, email, subject, phone, message);
  try {
    const transporter = await getTransporter();

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

    return true;
  } catch (error) {
    console.error("Mail error:", error);
    throw throwError("Failed to send email. Please try again later.", 500);
  }
}

async function sendNormalMail({ email, subject, html}) {
  console.log("ins mail : ",  email, subject, html);

  try {
     const transporter = await getTransporter();
    await transporter.verify();
    console.log("SMTP connection successful");

  /** Password Reset Email **/
    await transporter.sendMail({
      from: `"Anusha Structures" <${process.env.MAIL_USER}>`,
      to: email,
      subject: subject || "Password Reset Email",
      html: html,
    });

    return true;
  } catch (error) {
    console.error("Mail error:", error);
    throw throwError("Failed to send email. Please try again later."+error, 500);
  }
}

module.exports = {sendMail, sendNormalMail};
