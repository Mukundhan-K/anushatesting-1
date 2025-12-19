const multer = require("multer");
const path = require("path");
// const { throwError } = require("./errorMiddleware");
const {throwError} = require(path.join(__dirname, "errorMiddleware.js"));

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/webp", "image/jpg"];

  if (!allowedTypes.includes(file.mimetype)) {
    cb(throwError("Only JPG, WEBP images are allowed", 400));
  } else {
    cb(null, true);
  }
};

const upload = multer({
    storage,
    limits: {
        // fileSize: 2 * 1024 * 1024, // 2MB per image
        files: 4                 // max 4 images
    },
    fileFilter
});

module.exports = upload;