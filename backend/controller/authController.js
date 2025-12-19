const path = require("path");
const userDb = require(path.join(__dirname, "..", "model", "user.js"));
const {throwError} = require(path.join(__dirname, "..", "middleware", "errorMiddleware.js"))
const generateToken = require(path.join(__dirname, "..","config","generateToken.js"));

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

module.exports = {createUser, loginUser, logoutUser, authUser};