import React from 'react';
import type { TaskItemProps } from '../../types';

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, e.target.value as typeof task.status);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className={`task-priority-${task.priority} task-info`}>
        Priority: {task.priority} &nbsp;
        <span style={{ color: 'white' }}>
          Due: {task.dueDate}
        </span>
      </p>
      <div className="task-controls">
        <select
          className={`task-select ${task.status}`}
          value={task.status}
          onChange={handleStatusChange}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
