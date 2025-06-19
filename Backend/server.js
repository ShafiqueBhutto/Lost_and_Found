const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err))


const itemRoutes = require('./routes/itemRoutes')
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Now Server is running on port ${PORT}`))


