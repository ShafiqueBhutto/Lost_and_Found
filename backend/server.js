// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const foundItemsRoutes = require('./routes/foundItems'); // import router
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/found', foundItemsRoutes); // use the router

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });


// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//-----------
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import lostItemRoutes from "./routes/lostItems.js";
// import foundItemsRoute from "./routes/foundItems.js";


// dotenv.config();

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/api/found", foundItemsRoute);
// app.use("/uploads", express.static("backend/uploads"));

// // Routes
// app.use("/api", lostItemRoutes);

// // DB + Server
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection failed:", err));



///-------------

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// import lostItemsRoute from "./routes/lostItems.js";
// import foundItemsRoute from "./routes/foundItems.js"; // ✅
// import foundItemsRoutes from "./routes/foundItemsRoutes.js";

// /


// const app = express();
// dotenv.config();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads")); // For serving images

// // Routes
// app.use("/api/lost-items", lostItemsRoute);
// app.use("/api/found-items", foundItemsRoute); // ✅ Make sure this is added

// // DB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));



// app.use("/api/found-items", foundItemsRoutes); 
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });



// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// import lostItemsRoute from "./routes/lostItems.js";
// import foundItemsRoutes from "./routes/foundItemsRoutes.js"; // ✅ Correct route import

// const app = express();
// dotenv.config();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads")); // For serving uploaded images

// // Routes
// app.use("/api/lost-items", lostItemsRoute);
// app.use("/api/found-items", foundItemsRoutes); // ✅ Register correct route only once

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import path from "path";
// import { fileURLToPath } from "url";

// import lostItemsRoute from "./routes/lostItems.js";

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));

// // Routes
// app.use("/api/lost-items", lostItemsRoute);


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Start Server
// app.listen(5000, () => console.log("Server running at http://localhost:5000"));


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
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Start Server
app.listen(5000, () => console.log("🚀 Server running at http://localhost:5000"));
