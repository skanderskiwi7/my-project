const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "please enter ur first name"],
  },
  lastname: {
    type: String,
    required: [true, "please enter ur name"],
  },
  email: {
    type: String,
    required: [true, "please enter ur email"],
  },

  subject: {
    type: String,
    required: [true, "please enter a subject"],
  },
  message: {
    type: String,
    required: [true, "please enter ue msg"],
  },
});

module.exports = mongoose.model("contacts", contactSchema);
