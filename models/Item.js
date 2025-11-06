import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  price: Number,
  image: String
}, { timestamps: true });
export default mongoose.model("Item", itemSchema);
