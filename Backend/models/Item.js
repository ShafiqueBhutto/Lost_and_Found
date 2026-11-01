const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    location: String,
    date: Date,
    image: String
})

module.exports = mongoose.model('Item',itemSchema )