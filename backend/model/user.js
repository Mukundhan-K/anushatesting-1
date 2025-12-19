const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
        type : String
    }
},{
    timestamps : true,
});

userSchema.methods.comparePassword = function(passwd) {
    return (bcrypt.compareSync(passwd, this.password));
};

userSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        next();
    };
    const salt = bcrypt.genSaltSync(5);
    this.password = bcrypt.hashSync(this.password, salt);
});

// userSchema.methods.comparePassword = async function(pass) {
//     return (await bcrypt.compare(pass, this.password));
// };

// userSchema.pre("save",async function(next){
//     if (!this.isModified) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(5);
//     this.password = await bcrypt.hash(this.password, salt);
// });


const User = mongoose.model("User", userSchema);

module.exports = User;