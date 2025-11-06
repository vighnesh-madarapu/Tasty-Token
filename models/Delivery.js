import mongoose from "mongoose";
const deliverySchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  street: String,
  city: String,
  pincode: String,
  country: String,
  phoneno: String
}, { timestamps: true });
export default mongoose.model("Delivery", deliverySchema);
