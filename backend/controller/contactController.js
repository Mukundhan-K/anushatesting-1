const path = require("path");
const {throwError} = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));

const {sendMail} = require(path.join(__dirname, "..", "utils", "mailService.js"));
// const validateEmail = require(path.join(__dirname, "..", "utils", "validateEmail"));
const sanitize = require(path.join(__dirname, "..", "utils", "sanitize.js"));
const scoreSubject = require(path.join(__dirname, "..", "utils", "subjectScore"));
const validatePhone = require(path.join(__dirname, "..", "utils", "validatePhone"));

async function contactUs(req, res, next) {
  try {
    console.log(req.body);
    const { name, phone, email, subject, ...message } = req.body;

    if((!name) || (!email)) {
       return throwError("All fields are required ", 400);
    };

  //valiate phone number
    const phoneData  = validatePhone(phone);
    console.log(phoneData);
    
    if (!phoneData || !phoneData.isValid) {
      return throwError("Invalid mobile number", 400);
    };
    //    await verifyRecaptcha(recaptchaToken);

  // sanitize
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email.trim());
    const cleanSubject = sanitize(subject);
    const cleanMessage = {};
    Object.keys(message).forEach(k => {
      cleanMessage[k] = sanitize(message[k]);
    });
    
  // spam-safe subject
    const subjectScore = scoreSubject(cleanSubject);
    const finalSubject =
      subjectScore >= 3 ? "New Website Enquiry | Possible Spam Mail " : cleanSubject;

    // console.log("after clean : ",cleanName, cleanEmail, finalSubject,cleanMessage);
  //send mail
    await sendMail({ 
      name: cleanName,
      email: cleanEmail,
      subject: finalSubject,
      message: cleanMessage,
      phone : phoneData.e164
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    next(error);
  };
};

module.exports = {contactUs};