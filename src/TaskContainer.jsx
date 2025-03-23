import "./css/MainContent.css";

export default function MainContent({
  todo,
  handleDeleteTask,
  handleDoneTask,
}) {
  let styles = {
    textDecoration: "line-through",
  };

  return (
    <>
      <div className="t-c-div" key={todo.id}>
        {todo.isDone ? (
          <p className="main-tasks" style={styles}>
            {todo.task}
          </p>
        ) : (
          <p className="main-tasks">{todo.task}</p>
        )}
        <div className="tool-div">
          <button
            className="delete-task"
            onClick={() => handleDeleteTask(todo.id)}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
          <button
            className="check-task"
            onClick={() => handleDoneTask(todo.id)}
          >
            <i class="fa-solid fa-check"></i>
          </button>
        </div>
      </div>
    </>
  );
}
