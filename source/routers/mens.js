const express = require('express');
const router = new express.Router();

const MensRanking = require("../models/schema");

// We will handle Post Request here
router.post("/schema", async (req,res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// We will handle Get Request here
router.get("/schema", async (req,res) => {
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.send(getMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// If, we have to Get element by id.
router.get("/schema/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findById({_id});
        res.send(getMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

// Here, we'll handle patch request
router.patch("/schema/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(getMens);
    }
    catch(e){
        res.status(500).send(e);
    }
})

// Here, we'll handle delete request
router.delete("/schema/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findByIdAndDelete(_id);
        res.send(getMens);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;