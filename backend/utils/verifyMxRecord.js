const dns = require("dns").promises;
const path = require("path");
const { throwError } = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"));

async function verifyMxRecord(email) {
  const domain = email.split("@")[1];
  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

// Middleware
async function checkMxMiddleware(req, res, next) {
  if (!req.body.email) return next();

  const valid = await verifyMxRecord(req.body.email);
  if (!valid) {
    return next(
      throwError("Email domain is not valid", 400)
    );
  }
  next();
};

module.exports = checkMxMiddleware;
