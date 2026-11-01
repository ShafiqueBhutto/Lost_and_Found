const express = require("express");
const router = express.Router();
const Item = require("../models/Item"); 
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb){
    const uniqSufx = Date.now() + '-' + Math.round(Math.random()*1E9)
    cb(null, uniqSufx + path.extname(file.originalname));
  }
})

const upload = multer({storage:storage});


router.post("/", upload.single('image'), async (req, res) => {
  try {
    const { type, name, description, location, date } = req.body;
    const image = req.file ? req.file.filename : null;

    const newItem = new Item({
      type,
      name,
      description,
      location,
      date,
      image
    });
    
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
