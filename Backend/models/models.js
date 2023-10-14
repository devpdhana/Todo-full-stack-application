const mongoose = require('mongoose')


//Schema
const TaskSchema = new mongoose.Schema({
    todo : String,
    isCompleted : Boolean
})

const Task = mongoose.model('lists',TaskSchema)

module.exports = Task