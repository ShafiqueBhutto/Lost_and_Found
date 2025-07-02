
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connect("mongodb+srv://shafiquebhutto304:eTE1B73aWsPyk851@cluster0.on0cvlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("MongoDB connection failed:", error));

module.exports = app;
