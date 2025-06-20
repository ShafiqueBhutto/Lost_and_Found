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


const mongoose = require("mongoose");

const foundItemSchema = new mongoose.Schema({
title: String,
description: String,
location: String,
date: String,
image: String, // store filename
});

module.exports = mongoose.model("FoundItem", foundItemSchema);