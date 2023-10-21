const express = require('express')
const app = express()
const PORT = process.end.PORT || 8080
const mongoose = require('mongoose')
const cors = require('cors')
require('./models/db')

const router = require('./routes/routes')
//middleware
app.use(express.json())
app.use(cors());
app.use('/api/tasks',router)


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log(`server is running on port ${PORT}`)
    }
})