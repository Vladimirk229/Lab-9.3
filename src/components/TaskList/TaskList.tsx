import React from 'react';
import type { TaskListProps } from '../../types';
import TaskItem from '../TaskItem/TaskItem';

const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
