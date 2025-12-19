 const path = require("path");
 const {throwError} = require(path.join(__dirname, "errorMiddleware"));

function adminOnly(req, res, next) {
  try {
    if (req.user.role !== "admin") {
      return throwError("Admin access only", 403); 
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = adminOnly;