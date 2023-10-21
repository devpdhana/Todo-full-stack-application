import React from "react";
import "./Input.css";

const Input = ({ task, setTask, handleAdd }) => {
  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          placeholder="Enter your task here"
          className="task-input"
        />
        <button
          type="submit"
          onClick={() => handleAdd()}
          className="add-button"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
