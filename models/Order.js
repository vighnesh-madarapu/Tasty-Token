import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    name: String,
    unitPrice: Number,
    quantity: Number,
    lineTotal: Number
  }],
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
  paymentMethod: { type: String, default: 'COD' },
  status: { type: String, default: 'Pending' },
  orderId: String,
  grandTotal: Number
}, { timestamps: true });
export default mongoose.model("Order", orderSchema);
