const { body } = require("express-validator");

exports.contactValidator = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 2 characters")
    .escape(),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email")
    .normalizeEmail(),

  body("phone")
    .trim()
    .matches(/^[6-9]\d{9}$/)
    .withMessage("Invalid Indian mobile number"),

  body("message")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Message too long")
    .escape(),
];
