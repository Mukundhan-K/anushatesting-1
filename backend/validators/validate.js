const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(err => ({
      field: err.param,
      message: err.msg,
    }));

    const error = new Error("Validation failed");
    error.statusCode = 400;
    error.errors = formattedErrors; // attach details

    return next(error);
  }

  next();
};

module.exports = validate;