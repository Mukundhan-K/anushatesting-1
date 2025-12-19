const mongoose = require("mongoose");

async function connectDb() {
  try {
    const dbConnection = await mongoose.connect(`${process.env.MONGODB_URI}/aspl`);

    if (dbConnection) {
        console.log("db connected : ",dbConnection.connection.name);
    } else {
        throw new Error("db connection error : ");
    };
  }catch (error) {
    console.error("db error occured : ", error);
  };
};

module.exports = connectDb;