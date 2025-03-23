import "./css/MainContent.css";
import TaskContainer from "./TaskContainer";

// Showing all tasks
export default function MainContent({
  taskWork,
  handleDeleteTask,
  handleDoneTask,
}) {
  return (
    <div className="MainContent">
      <section className="task-section">
        <p id="task-heading">All To-Do</p>
        <section className="task-container">
          {taskWork
            .slice()
            .reverse()
            .map((task) => {
              return (
                <TaskContainer
                  handleDeleteTask={handleDeleteTask}
                  handleDoneTask={handleDoneTask}
                  todo={task}
                  key={task.id}
                ></TaskContainer>
              );
            })}
        </section>
      </section>
    </div>
  );
}
