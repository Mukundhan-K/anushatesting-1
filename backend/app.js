const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

// importing files *****************************************************

const authRoutes = require(path.join(__dirname,"routes","authRoutes"));
const projectRoutes = require(path.join(__dirname,"routes","projectRoutes"));
const shopRoutes = require(path.join(__dirname,"routes","shopRoutes"));
const contactRoutes = require(path.join(__dirname,"routes","contactRoutes"));

const {errorHandler, throwError} = require(path.join(__dirname,"middleware","errorMiddleware.js"));

// app config *****************************************************

const app = express();

const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://anushatesting-1-front.onrender.com",
  "https://anushatesting-1.onrender.com",
  "https://anushatesting.netlify.app/",
  "http://localhost:5173" // keep for local dev
].filter(Boolean); // 🔥 removes undefined values


console.log("cleint url : ", process.env.CLIENT_URL,allowedOrigins);

// app middlewares *****************************************************

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => {
      // allow server-to-server, postman, render health checks
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // ❌ DO NOT throw error (causes deployment/runtime issues)
      return callback(null, false);
    },
    methods : ['GET','POST','PUT','DELETE'],
    allowedHeaders : [
        "Content-type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        objectSrc: ["'none'"],
      },
    },
  })
);
app.use(morgan("combined"));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

function sanitizeObject(obj) {
  if (!obj || typeof obj !== "object") return;

  for (const key of Object.keys(obj)) {
    if (key.startsWith("$") || key.includes(".")) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      sanitizeObject(obj[key]);
    }
  }
}
app.use((req, res, next) => {
  sanitizeObject(req.body);
  sanitizeObject(req.query);
  sanitizeObject(req.params);
  next();
});


// doubt *****************************************************

// app.disable('x-powered-by');
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// url - routes *****************************************************

    app.get("/", (req, res) => {
      res.send("Backend is running 🚀");
    });

    //  auth ---------------------------------
    app.use("/api/auth", authRoutes);

    //  project ---------------------------------
    app.use("/api/project", projectRoutes);

    //  shop ---------------------------------
    app.use("/api/shop", shopRoutes);

    //  mail ---------------------------------
    app.use("/api/contact", contactRoutes);

    //  files ---------------------------------

// 404 error page *****************************************************

app.use((req, res, next) => {
  next(throwError(`404 Error - page not found ${req.originalUrl}`, 404));
});
app.use(errorHandler);

// export *****************************************************
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client", "dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.join(__dirname, "client", "dist", "index.html")
//     );
//   });
// }

// export *****************************************************

module.exports = app;