import React from "react";
import "./UpdateTask.css";

const UpdateTask = ({
  updateTask,
  setUpdateTask,
  handleTaskEdit,
  setShowPopup,
  updateID,
  setUpdateID,
}) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
            placeholder="Update task"
            className="update-input"
          />
          <button
            onClick={() => {
              handleTaskEdit(updateID);
              setShowPopup(false);
            }}
            className="update-btn"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
