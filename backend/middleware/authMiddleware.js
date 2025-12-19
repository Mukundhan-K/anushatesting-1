 const path = require("path");
 const jwt = require("jsonwebtoken");
 const {throwError} = require(path.join(__dirname, "errorMiddleware"));
 const userDb = require(path.join(__dirname,"..","model","user.js"));

 async function authMiddleware(req,res,next){
    try {


        const authToken = req.cookies?.token || req.headers.authorization?.split(" ")[1];
        // console.log("auth token : ",req.headers.authorization, "auth token 2 : ", req.cookies);
        
        // const token = req.cookies.token;
        // const authHead = req.headers.Authorization || req.headers.authorization;
        // console.log("cook tok : ", token, authHead);
        
        // // if ((!token) && (!(authHead && authHead.startsWith("Bearer")))) {
        // if (!(authHead && authHead.startsWith("Bearer"))) {
        //     return throwError("Login to Access content", 400);
        // };

        // // const authToken = (token) || (authHead.split(" ")[1]);
        // const authToken = authHead.split(" ")[1];
        if (!authToken) {
            return throwError("Login to Access content", 401);
        }

        const decoded = await jwt.verify(
            authToken,
            process.env.AUTH_TOKEN,
        );

        const userAvail = await userDb.findOne({
            _id: decoded.id,
            userName: decoded.userName
        });
        console.log("user avail tok : ", userAvail);

        if (!userAvail) {
            return throwError("Session expired..Please Login again", 401); 
        };
        req.user = userAvail;
        next();

    } catch (error) {
        next(error);
    }
 };

 module.exports = authMiddleware;