const express = require("express");
const Item = require("../models/Item");
const { protect, adminOnly } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/items", protect, adminOnly, async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

router.delete("/items/:id", protect, adminOnly, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
});

module.exports = router;
