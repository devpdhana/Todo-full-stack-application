const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('./models/db')

const router = require('./routes/routes')
//middleware
app.use('/api/tasks',router)



app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log(`server is running on port ${PORT}`)
    }
})