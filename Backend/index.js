const express = require('express')
const app = express()
const PORT = 3000

// const mongose = require('mongose')
app.get('/',(req,res)=>{
    res.send("Hello world")
})


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }else {
        console.log(`server is running on port ${PORT}`)
    }
})