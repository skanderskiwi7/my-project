const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "please enter firstname"],
  },

  lastname: {
    type: String,
    required: [true, "please enter lastname"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter password"],
  },
  role: {
    type: Number,
    required: [true, "please enter role"],
  },
  phone: {
    type: Number,
    required: [true, "please enter telephone"],
  },
});

module.exports = mongoose.model("users", userSchema);
