const path = require("path");
const router = require("express").Router();

const authMiddleware = require(path.join(__dirname,"..","middleware","authMiddleware.js"));
const {loginLimiter} = require(path.join(__dirname,"..", "middleware", "slowDownLimiter.js"));
const {contactLimiter} = require(path.join(__dirname,"..", "middleware", "contactLimiter.js"));


const validate = require(path.join(__dirname,"..", "validators", "validate.js"));
const { loginValidator } = require(path.join(__dirname,"..", "validators", "auth.validator.js"));

const blockDisposable = require(path.join(__dirname, "..", "utils", "blockDisposableMail.js"));
const checkMxMiddleware = require(path.join(__dirname, "..", "utils", "verifyMxRecord.js"));

const {createUser, loginUser, logoutUser, authUser, forgotPassword, resetPassword} = require(path.join(__dirname,"..", "controller", "authController.js"));

// create user
// api - /api/auth/signup
// router.post("/createuser", contactLimiter, loginLimiter, blockDisposable, checkMxMiddleware, loginValidator, validate, createUser);
// router.post("/createuser", createUser);

// login user
// api - /api/auth/login
router.post("/login", 
  // 1️⃣ Stop abuse ASAP
  contactLimiter, loginLimiter,
  // 2️⃣ Block disposable / invalid emails (cheap checks first)
  blockDisposable, checkMxMiddleware,
  // 3️⃣ Validate request body
  loginValidator, validate,
  // 4️⃣ Controller (DB logic)
  loginUser
);

// logout user
// api - /api/auth/logout
router.get("/logout", logoutUser);

// auth user
// api - /api/auth/auth
router.get("/admin", authMiddleware, authUser);

// forgot password
// api - /api/auth/forgotPassword
router.post("/forgotPassword",
  // 1️⃣ Stop abuse ASAP
  contactLimiter, loginLimiter,
  // 2️⃣ Block disposable / invalid emails (cheap checks first)
  blockDisposable, checkMxMiddleware,
  // 3️⃣ Validate request body
   validate,
  // 4️⃣ Controller (DB logic)
  forgotPassword
);

// reset password
// api - /api/auth/resetPassword/:any
router.put("/resetPassword/:token",
  // 1️⃣ Stop abuse ASAP
  contactLimiter, loginLimiter,
  // 3️⃣ Validate request body
   validate,
  // 4️⃣ Controller (DB logic)
  resetPassword
);

module.exports = router;