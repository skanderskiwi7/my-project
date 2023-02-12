const mongoose = require("mongoose");

connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://skander7:skander123@cluster0.d1v5fd6.mongodb.net/auth"
    );
    console.log("you are connecting to mongodb");
  } catch (err) {
    console.log(err, "vous etes pas connecté avec l'nternet");
  }
};
module.exports = connectdb;
