const throwError = (message, statusCode = 500) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  throw err;
};

const errorHandler = (err, req, res, next) => {
  console.error("🔥 Error:", err.message);

  const statusCode =
    err.statusCode && err.statusCode >= 400
      ? err.statusCode
      : 500;

  const response = {
    success: false,
    message: err.message || "Something went wrong",
  };

  // Attach validation errors if present
  if (err.errors) {
    response.errors = err.errors;
  }

  // Development mode → show stack
  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
    response.environment = "development";
  }

  // Production mode → clean output
  if (process.env.NODE_ENV === "production") {
    response.environment = "production";
  }

  res.status(statusCode).json(response);
};

module.exports = {
  throwError,
  errorHandler,
};
