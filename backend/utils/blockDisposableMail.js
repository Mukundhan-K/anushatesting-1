const disposableDomains = require("disposable-email-domains");
const path = require("path");
const { throwError } = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));

function isDisposableEmail(email) {
  const domain = email.split("@")[1].toLowerCase();
  return disposableDomains.includes(domain);
}

// Middleware
function blockDisposable(req, res, next) {
  if (req.body.email && isDisposableEmail(req.body.email)) {
    return next(
      throwError("Disposable emails are not allowed", 400)
    );
  }
  next();
}


module.exports = blockDisposable;