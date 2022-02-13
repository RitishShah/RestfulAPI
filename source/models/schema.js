// const express = require('express');
const mongoose = require('mongoose');


// Schema
const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        reuired:true,
        trim:true
    },
    dob:{
        type:Date,
        reuired:true,
        trim:true
    },
    country:{
        type:String,
        reuired:true,
        trim:true
    },
    score:{
        type:Number,
        reuired:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    },
});

// We are creating a New Collection
const MensRanking = new mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;