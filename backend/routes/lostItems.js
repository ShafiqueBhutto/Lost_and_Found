// // backend/routes/lostItems.js
// import express from "express";
// import multer from "multer";
// import { reportLostItem, getLostItems } from "../controllers/lostItemController.js";

// const router = express.Router();

// // Multer config
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "backend/uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// router.post("/lost-items", upload.single("image"), reportLostItem);
// router.get("/lost-items", getLostItems);

// export default router;

// backend/routes/lostItems.js


// import express from "express";
// import multer from "multer";
// import {
//   reportLostItem,
//   getLostItems,
// } from "../controllers/lostItemController.js";

// const router = express.Router();

// // File upload config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });

// const upload = multer({ storage });

// // Routes
// router.post("/", upload.single("image"), reportLostItem);
// router.get("/", getLostItems);

// export default router;



import express from "express";
import multer from "multer";
import { reportLostItem, getLostItems } from "../controllers/lostItemController.js";

const router = express.Router();

// multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), reportLostItem);
router.get("/", getLostItems);

export default router;
