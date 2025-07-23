const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  price: Number,
  address: String,
  description: String,
  image: String,
});

module.exports = mongoose.models.Property || mongoose.model("Property", PropertySchema);