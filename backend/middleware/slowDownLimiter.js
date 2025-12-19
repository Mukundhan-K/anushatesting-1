const slowDown = require('express-slow-down');
// const path =require("path");
// const {throwError} = require(path.join(__dirname, "errorMiddleware.js"));

const loginLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 5,
  delayMs: () => 1000,
  validate: { delayMs: false }
});

module.exports = { loginLimiter };
