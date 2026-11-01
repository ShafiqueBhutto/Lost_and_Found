
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const itemRoutes = require("./routes/itemRoutes");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/items", itemRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is missing in .env file");
}

mongoose.connect(mongoUri)
  .then(() => {
    console.log("MongoDB Connected");

    // Start local server only
    if (require.main === module) {
      const PORT = process.env.PORT || 5000;

      app.listen(PORT, () => {
        console.log(`Backend running on port ${PORT}`);
      });
    }
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

module.exports = app;
