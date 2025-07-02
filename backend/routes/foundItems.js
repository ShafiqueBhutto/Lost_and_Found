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

