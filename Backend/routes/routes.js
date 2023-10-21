const express = require("express");

const router = express.Router();
const Task = require("../models/models");
// async function Operations (){
//     const task = await Task.create({
//       todo: "Making lunch",
//       isCompleted: false,
//     });
// }



router.get("/", async (req, res) => {
  const taskLists = await Task.find();
  res.json(taskLists);
});

router.post("/", async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    console.log(req.body)
    res.json(newTask)
  } catch (err) {
    console.log(err.message);
  }
});

router.put("/:id",(req, res) => {
  try {
    const {_id,todo,isCompleted} = req.body
    console.log(_id, todo, isCompleted);
    Task.findByIdAndUpdate(_id,{todo,isCompleted},{new:true})
    .then((data)=>res.json(data))
    .catch((err)=>console.log(err))
    // res.json(updated)
    console.log("a"+_id, todo, isCompleted);
  } catch (err) {
    console.log(err.message);
  }
});



router.delete('/:id',(req,res)=>{
  console.log("delete called")
  const {id} = req.params;
  console.log(id)
  Task.findByIdAndDelete(id).then((data)=>res.send(data)).catch((err)=>console.log(err))
  // Task.deleteMany({todo:{$exists : true}}).then(()=>res.send('deleted...'))
})
module.exports = router;
