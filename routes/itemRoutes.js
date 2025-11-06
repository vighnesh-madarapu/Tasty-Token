// backend/routes/itemRoutes.js
import express from "express";
import Item from "../models/Item.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();   // returns all fields including image
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
