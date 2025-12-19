const { body } = require("express-validator");

exports.loginValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Password must be at least 8 characters"),
];
