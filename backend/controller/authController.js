const path = require("path");
const userDb = require(path.join(__dirname, "..", "model", "user.js"));
const {throwError} = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"))
const generateToken = require(path.join(__dirname, "..","config","generateToken.js"));
const crypto = require("crypto");
const {sendNormalMail} = require(path.join(__dirname, "..", "utils", "mailService.js"));

// =======================================================
//  create user ===========================================

// route -  post - api/auth/signup ;
// access - public ;

async function createUser(req,res,next) {
    try {
      const {userName, email, password, role} = req.body;
      console.log("userName, email, password, role : ", userName, email, password, role);

      if (!userName || !email || !password) {
        return throwError("please fill all data : ", 400)
      };

      if (password.length < 5) {
        return throwError("password lenght is lessthan 5", 400);
      }

      const userAvail = await userDb.findOne({email});
      if (userAvail) {
        console.log("email available : ", userAvail);
        return throwError("user already exists with same email ", 400)
      };

      const newUser = await userDb.create({userName, email, password});
      console.log("new user : ", newUser);
      
      if (newUser) {
        return res.status(200).json({
                success : true,
                message: "user created",
                data :  newUser
              });
      };
    } catch (error) {
        next(error);
    };
};

// =======================================================
//  login user ===========================================

// route -  post - api/auth/login ;
// access - public ;

async function loginUser(req, res, next) {
  try {
    const{email, password} = req.body;
    console.log("login : ", email, password);
    
    if ((!email) || (!password)) {
      return throwError("please fill all fields",400);
    };

    const userAvail = await userDb.findOne({email}).select("+password");
    if (userAvail) {
      const userVerif = await userAvail.comparePassword(password);
      console.log("user v : ", userVerif);
      
      if (userVerif) {
        console.log("user verified : ",userAvail);
        const tokenData = {
          id: userAvail._id,
          userName : userAvail.userName,
          role : userAvail.role
        };
        const token = await generateToken(tokenData);

        return res
        .cookie("token", token, 
          {
           httpOnly : true,
           secure : true,
           sameSite: "none",
           maxAge: 1 * 60 * 60 * 1000,
          }
        )
        .status(200)
        .json({
          success : true,
          message : "User Available",
          user : tokenData,
          token
        });
      }else{
        return throwError("Password not Matched", 400);
      };
    }else{
      return throwError("User not Found", 404);
    }
  } catch (error) {
    next(error);
  };
};

// =======================================================
//  logout user ===========================================

// route -  get - api/auth/logout ;
// access - private ;

async function logoutUser(req, res, next) {
    res.status(200)
    .clearCookie("token",{httpOnly : true, secure : true, sameSite: "none"})
    .json({
      success : true,
      message : "Logged out Successfully"
    })
};

// =======================================================
//  auth middleware user ===========================================

// route -  post - api/auth/admin ;
// access - private ;

async function authUser(req, res, next) {
    try {
      const {user} = req;      
      if(!user){
          return throwError("User Auth failed ", 401);
      }else{
          res.status(200).json({
              success:true,
              message: "user available",
              user : {
                userName : user.userName,
                role : user.role
              }
          });
      }
    } catch (error) {
        next(error);
    };
};

// =======================================================
//  forgot Password ===========================================

// route -  post - api/auth/forgotPassword ;
// access - public ;

async function forgotPassword(req, res, next){
  try {
    const { email } = req.body;
    console.log("email : ", email);
    
    const user = await userDb.findOne({ email });
    console.log("user : ", user);
    
    if (!user) {
      console.log("user error");
      return throwError("User not found : ", 404);
    }

    const resetToken = user.getResetPasswordToken();

    // Use updateOne instead of save to avoid pre-save hooks
    await userDb.updateOne(
      { _id: user._id },
      {
        $set: {
          resetPasswordToken: user.resetPasswordToken,
          resetPasswordExpire: user.resetPasswordExpire
        }
      }
    );

    console.log("user token : ", user, resetToken);
    // await user.save({ validateBeforeSave: false });
    // console.log("user token 2 : ", user, resetToken);
    
    const resetUrl = `${process.env.ADMIN_URL}/resetPassword/${resetToken}`;

    const message = `
      <h3>Password Reset</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${resetUrl}" target="_blank">${resetUrl}</a>
      <p>This link expires in 15 minutes.</p>
    `;

    await sendNormalMail({
      email : email,
      subject: "Admin Password Reset",
      html: message
    });

    res.status(200).json({
      success: true,
      message: "Reset link sent to email"
    });

  } catch (error) {
    next(error);
    console.log(error);
    // res.status(500).json({
    //   success: false,
    //   message: error.message || "Error sending reset email"
    // });
  }
};

// =======================================================
//  reset Password ===========================================

// route -  post - api/auth/forgotPassword ;
// access - public ;

async function resetPassword (req, res, next) {
  try {

    const {main, confirm} = req.body.password;

    console.log("pass", req.body,  main, confirm );
    

    // Validate input
    if (!main) {
      return throwError("Password is required : ", 400);
    };
    if (main.length < 5) {
      return throwError("Password must be at least 5 characters : ", 400);
    };
    // Optional: validate confirmPassword
    if (confirm && main !== confirm) {
      return throwError("Passwords do not match : ", 400);
    };

    const resetToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

      console.log("Looking for token:", resetToken);

    // Find user with valid token
    const user = await userDb.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpire: { $gt: Date.now() }
    }).select("+password +resetPasswordToken +resetPasswordExpire");

    if (!user) {
      return throwError("Invalid or expired token", 404);
    };

    user.password = main;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    // // Hash password manually
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // // Update user with new password and clear reset fields
    // await userDb.updateOne(
    //   { _id: user._id },
    //   {
    //     $set: {
    //       password: hashedPassword
    //     },
    //     $unset: {
    //       resetPasswordToken: "",
    //       resetPasswordExpire: ""
    //     }
    //   }
    // );

    res.status(200).json({
      success: true,
      message: "Password reset successful"
    });

  } catch (error) {
    console.log(error);
    
    next(error);
  }
};

module.exports = {createUser, loginUser, logoutUser, authUser, forgotPassword, resetPassword};