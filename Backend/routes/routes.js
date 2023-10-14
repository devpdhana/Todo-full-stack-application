const express = require('express')

const router = express.Router()
const Task = require("../models/models");

async function Operations (){
    const task = await Task.create({
      todo: "Making lunch",
      isCompleted: false,
    });
}

router.get('/',(req,res)=>{
    Operations()
    res.send('Hello ,world!')
})

module.exports = router