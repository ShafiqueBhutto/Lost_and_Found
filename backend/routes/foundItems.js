const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const FoundItem = require('../models/FoundItem');

// Multer config (for saving images to /uploads)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  },
});
const upload = multer({ storage: storage });

//  POST /api/found — add new item
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, location, date } = req.body;
    const image = req.file ? req.file.filename : '';

    const newItem = new FoundItem({
      title,
      description,
      location,
      date,
      image,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item saved successfully', item: newItem });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//  GET /api/found — get all items
router.get('/', async (req, res) => {
  try {
    const items = await FoundItem.find().sort({ date: -1 }); // latest first
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
