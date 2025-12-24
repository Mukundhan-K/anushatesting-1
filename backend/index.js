const path = require("path");
// require("dotenv").config({"path" : path.join(__dirname, "config.env")});
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: path.join(__dirname, "config.env"),
  });
}
const app = require(path.join(__dirname, "app.js"));

// imported files ---------------------------------------------

const dbconnection = require(path.join(__dirname,"config","db.js"));
const connectCloudinary = require(path.join(__dirname,"config","cloudinary"));

// app config ---------------------------------------------

dbconnection();
connectCloudinary();
// const port = process.env.PORT || 5000;

// connection ---------------------------------------------

// app.listen(port, ()=>{
//     console.log("server run @ port : ", port);
// });


// ✅ THIS IS MANDATORY FOR VERCEL
module.exports = app;