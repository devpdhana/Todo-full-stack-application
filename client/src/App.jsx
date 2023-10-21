import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import axios from 'axios'
import Content from './components/Content'
import UpdateTask from './components/UpdateTask'

function App() {
  const [count, setCount] = useState(0)
  const [task,setTask] = useState('')
  const [todolist,setTodolist] = useState([])
  const [updateTask,setUpdateTask] = useState('')
  const [showPopup,setShowPopup] = useState(false)
  const [updateID,setUpdateID] = useState('')
  const baseURL = 'http://localhost:8080/api/tasks/'; 

  const handleAdd = ()=>{
    axios.post(baseURL,{
      todo: task,
      isCompleted: false
    }).then((res)=>{
      setTodolist([...todolist,res.data]);
      setTask('')
    });
  }

  const handleEdit =(tlists)=>{
    const newList = todolist.map((item) => (
      item._id === tlists._id ? { ...item, isCompleted: tlists.isCompleted }: item
    ));
      setTodolist(newList)
  }

  const handleDelete = (listID) =>{
    axios.delete(`http://localhost:8080/api/tasks/${listID}`)
    .then((res)=>{
      const newlists = todolist.filter((item)=>(item._id !== res.data
        ._id))
        setTodolist(newlists)
    })
  }

  const handleTaskEdit = (listID)=>{
    axios.put(`http://localhost:8080/api/tasks/${listID}`,{
      _id:listID,
      todo:updateTask,
      isCompleted:false
    }).then((data)=>{
      const newlists = todolist.map((task)=>(
        task._id === data.data._id ? {...task,todo:data.data.todo}:task
      ))
      setTodolist(newlists)
    }).catch((err)=>{
      alert(err.message)
    })
  }

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const lists = await axios.get(baseURL);
        setTodolist(lists.data)
      }catch(err){
        alert(err.message)
      }
    }
    fetchData()
  },[])

  return (
    <>
      <Header />

      <Input 
      task= {task}
      setTask={setTask}
      handleAdd={handleAdd}
      />
      <Content
      todoList={todolist}
      handleEdit={handleEdit}
      handleDelete = {handleDelete}
      showPopup = {showPopup}
      setShowPopup = {setShowPopup}
      UpdateTask = {updateTask}
      setUpdateTask = {setUpdateTask}
      setUpdateID={setUpdateID}
      />

      {showPopup && <UpdateTask 
      updateTask = {updateTask}
      setUpdateTask= {setUpdateTask}
      handleTaskEdit= {handleTaskEdit}
      setShowPopup = {setShowPopup}
      updateID = {updateID}
      setUpdateID = {setUpdateID}/>}
    </>
  )
}

export default App
