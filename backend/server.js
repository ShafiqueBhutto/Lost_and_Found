import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Import Routes
import lostItemsRoute from "./routes/lostItems.js";
import foundItemsRoute from "./routes/foundItems.js"; // ✅ ADD THIS LINE

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/lost-items", lostItemsRoute);
app.use("/api/found-items", foundItemsRoute); // ✅ ADD THIS LINE

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start Server
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
