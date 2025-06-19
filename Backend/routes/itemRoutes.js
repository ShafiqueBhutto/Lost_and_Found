const express = require('express');
const router = express.Router();
const Item = require('../models/Item')

router.post('/', async(req, res)=>{
    try{
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).json(newItem);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})

router.get('/:type', async(req, res)=>{
    try{
        const items = await Item.find({type: req.params.type})
        res.json(items);
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router;