const rateLimit = require("express-rate-limit");
const path =require("path");
const {throwError} = require(path.join(__dirname, "errorMiddleware.js"));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests. Please try again later.",
  },
  handler: () => {
    return throwError("Too many contact requests. Please try again later.",429);
  },
});

module.exports = { contactLimiter };
