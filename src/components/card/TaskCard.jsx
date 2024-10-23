import React from "react";
import "./TaskCard.css"; // CSS for TaskCard

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-header">
        <p className="task-id">{task.id}</p>
        <span className="user-icon">👤</span> {/* Placeholder for user icon */}
      </div>
      <p className="task-title">{task.title}</p>
      <p className="task-type">{task.tag}</p>
    </div>
  );
};

export default TaskCard;
