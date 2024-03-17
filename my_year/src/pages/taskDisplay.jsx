import React from 'react';
import { format } from "date-fns"

const TaskDisplay = ({ tasks }) => {
  return (
    <div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            
            <p>{task.taskData}</p>
            <p>{format(new Date(task.created_at), "dd/MM/yyyy")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDisplay;
