import { useState } from "react";
import MenuLogo from "./MenuLogo";
import MenuTools from "./MenuTools";
import MainContent from "./MainContent";
import { v4 as uuidv4 } from "uuid";
import "./css/Menu.css";

export default function Menu() {
  let [task, setTask] = useState([
    { task: "sleep", id: uuidv4(), isDone: false },
  ]);
  let [todo, setTodo] = useState("");

  const handleOnChange = (e) => setTodo(e.target.value);

  const handleAddTask = () => {
    if (todo.trim() === "") return; // Fixing the issue with checking empty input
    setTask((prevTasks) => [
      ...prevTasks,
      { task: todo, id: uuidv4(), isDone: false },
    ]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTask((prevTasks) => prevTasks.filter((currTodo) => currTodo.id !== id));
  };

  const handleDoneTodo = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="Menu">
      <MenuLogo />
      <MenuTools
        todo={todo}
        handleAddTask={handleAddTask}
        handleOnChange={handleOnChange}
      />
      <MainContent
        taskWork={task}
        handleDeleteTask={handleDeleteTodo}
        handleDoneTask={handleDoneTodo}
      />
    </div>
  );
}
