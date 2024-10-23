import React from "react";
import TaskCard from "../card/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ status, tasks }) => {
  return (
    <div className="task-column">
      <div className="task-column-header">
        <div className="task-column-status">
          <span className="circle-icon">💻</span>{" "}
          <h3 className="status-title">{status}</h3>
          <span className="task-count">3</span> {/* Task count */}
        </div>
        <div className="task-header-buttons">
          <button className="add-task-button">+</button>
          <button className="more-options-button">•••</button>
        </div>
      </div>

      <div className="tasks">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
