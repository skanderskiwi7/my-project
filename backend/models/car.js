const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  brand: {
    type: String,
    required: [true, "please enter brand"],
  },
  model: {
    type: String,
    required: [true, "please enter model"],
  },
  price: {
    type: Number,
    required: [true, "please enter prix"],
  },
  color: {
    type: String,
    required: [true, "please enter color"],
  },
  creationDate: {
    type: String,
    required: [true, "please enter creation date"],
  },
  fuel: {
    type: String,
    required: [true, "please enter fuel"],
  },
  mileage: {
    type: Number,
    required: [true, "please enter mileage"],
  },

  transmission: {
    type: String,
    required: [true, "please enter transmission"],
  },

  image: {
    type: String,
    required: [true, "please enter url image"],
  },
});

module.exports = mongoose.model("cars", carsSchema);
