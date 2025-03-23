import { useState } from "react";
import "./css/MenuTools.css";

// Taking input from users
export default function MenuTools({ todo, handleAddTask, handleOnChange }) {
  return (
    <div className="MenuTools">
      <input
        value={todo}
        onChange={handleOnChange}
        placeholder="add task.."
        type="text"
        id="task-input"
      />
      <button id="task-add-button" onClick={handleAddTask}>
        Planit
      </button>
    </div>
  );
}
