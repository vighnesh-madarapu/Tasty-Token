import express from "express";
import Order from "../models/Order.js";
import Delivery from "../models/Delivery.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { items, delivery } = req.body;
    // create delivery document
    const deliveryDoc = await Delivery.create(delivery);
    const mapped = items.map(i => ({
      itemId: i._id || null,
      name: i.name,
      unitPrice: i.price,
      quantity: i.quantity,
      lineTotal: i.price * i.quantity
    }));
    const grandTotal = mapped.reduce((s, it) => s + it.lineTotal, 0);
    const order = await Order.create({
      items: mapped,
      delivery: deliveryDoc._id,
      grandTotal,
      orderId: "ORD" + Date.now()
    });
    res.json({ success: true, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Order creation failed" });
  }
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id).populate('delivery').populate('items.itemId');
  if (!order) return res.status(404).json({ error: "Not found" });
  res.json(order);
});

export default router;
