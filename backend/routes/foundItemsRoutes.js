// import express from "express";
// import multer from "multer";
// import {
//   reportFoundItem,
//   getFoundItems,
// } from "../controllers/foundItemController.js";

// const router = express.Router();

// // Multer config for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// router.post("/", upload.single("image"), reportFoundItem);
// router.get("/", getFoundItems);

// export default router;


// backend/routes/foundItemsRoutes.js
import express from "express";
import multer from "multer";
import { reportFoundItem, getFoundItems } from "../controllers/foundItemController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), reportFoundItem);
router.get("/", getFoundItems);

export default router;
