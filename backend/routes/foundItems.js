// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const FoundItem = require('../models/FoundItem');

// // Multer config (for saving images to /uploads)
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)); // unique name
//   },
// });
// const upload = multer({ storage: storage });

// //  POST /api/found — add new item
// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     const { title, description, location, date } = req.body;
//     const image = req.file ? req.file.filename : '';

//     const newItem = new FoundItem({
//       title,
//       description,
//       location,
//       date,
//       image,
//     });

//     await newItem.save();
//     res.status(201).json({ message: 'Item saved successfully', item: newItem });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// //  GET /api/found — get all items
// router.get('/', async (req, res) => {
//   try {
//     const items = await FoundItem.find().sort({ date: -1 }); // latest first
//     res.status(200).json(items);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;



// import express from "express";
// import { getFoundItems, createFoundItem } from "../controllers/foundItemController.js";
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// // Setup multer for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Routes
// router.get("/", getFoundItems);
// router.post("/", upload.single("image"), createFoundItem); // ✅ POST route with image upload

// export default router;

import express from "express";
import { getFoundItems, reportFoundItem } from "../controllers/foundItemController.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Setup multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.get("/", getFoundItems);
router.post("/", upload.single("image"), reportFoundItem); // ✅ Fixed function name

export default router;

