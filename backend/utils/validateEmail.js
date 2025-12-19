const path = require("path");
const { throwError } = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));


function validateEmail(email) {
  console.log("mail : ", email);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return throwError("Invalid email address", 400);
  }
  return true;
}

module.exports = validateEmail;
