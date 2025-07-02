// const mongoose = require('mongoose');

// const foundItemSchema = new mongoose.Schema({
//   itemName: String,
//   description: String,
//   location: String,
//   date: String,
//   imageUrl: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('FoundItem', foundItemSchema);


// import mongoose from "mongoose";

// const foundItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   date: String,
//   image: String,
// });

// export default mongoose.model("FoundItem", foundItemSchema);


// import mongoose from "mongoose";

// const foundItemSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   location: String,
//   date: String,
//   image: String, // store filename
// });

// export default mongoose.model("FoundItem", foundItemSchema);


// backend/models/FoundItem.js
import mongoose from "mongoose";

const foundItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: String,
  image: String,
});

export default mongoose.model("FoundItem", foundItemSchema);
