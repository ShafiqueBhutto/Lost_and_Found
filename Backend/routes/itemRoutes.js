const express = require("express");
const router = express.Router();
const Item = require("../models/Item"); // Assuming you have a model

router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item saved", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Error saving item", error });
  }
});

router.get("/:type", async (req, res) => {
  try {
    const items = await Item.find({ type: req.params.type });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items", error });
  }
});

module.exports = router;
