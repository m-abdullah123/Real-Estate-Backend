import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Prevent model overwrite error on hot reload / Vercel deploy
const Property = mongoose.models.Property || mongoose.model("Property", PropertySchema);

export default Property;