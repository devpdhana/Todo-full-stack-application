import React from "react";
import "./Content.css";
import axios from "axios";

const Content = ({
  todoList,
  handleEdit,
  handleDelete,
  showPopup,
  setShowPopup,
  updateTask,
  setUpdateTask,
  setUpdateID,
}) => {
  const handleUpdate = async (list) => {
    await axios
      .put(`http://localhost:8080/api/tasks/${list._id}`, {
        _id: list._id,
        todo: list.todo,
        isCompleted: !list.isCompleted,
      })
      .then((data) => {
        handleEdit(data.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="task-lists">
      {todoList.map((list) => (
        <ul key={list._id} className="list-item">
          <div className="list-item-content">
            <input
              type="checkbox"
              checked={list.isCompleted}
              onChange={() => handleUpdate(list)}
              className="checkbox-input"
            />
            <li
              className={list.isCompleted === true ? "task-completed" : "task"}
            >
              {list.todo}
            </li>
            <button
              className="edit-btn"
              onClick={(e) => {
                setShowPopup(true);
                setUpdateTask(list.todo);
                setUpdateID(list._id);
              }}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(list._id)}
            >
              Delete
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Content;
