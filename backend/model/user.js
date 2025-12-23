const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : [true, "user name required"]
    },
    email : {
        type : String,
        required : [true, "email required"],
        unique: [true,"email address should be unique"]
    },
    password : {
        type : String,
        required : [true, "password required"],
        select : false,
        minlength : 5
    },
    role : {
        type : String,
    },
    resetPasswordToken: {
        type: String,
        select: false
    },
    resetPasswordExpire: {
        type: Date,
        select: false
    }
},{
    timestamps : true,
});

userSchema.methods.comparePassword = function(passwd) {
    return (bcrypt.compareSync(passwd, this.password));
};

userSchema.pre("save", function(next) {
    // password field not present → skip
    if (!this.password || !this.isModified("password")) {
        return;
        // return next();
    };
    const salt = bcrypt.genSaltSync(5);
    this.password = bcrypt.hashSync(this.password, salt);
    // next();
});

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 mins / 60 s * 1000 milli

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;