const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const itemRoutes = require("./routes/itemRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

// Database Connection
mongoose.connect("mongodb+srv://shafiquebhutto304:eTE1B73aWsPyk851@cluster0.on0cvlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Now Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
