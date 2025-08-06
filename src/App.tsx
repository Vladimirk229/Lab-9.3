import { useState } from 'react';
import './App.css';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskList from './components/TaskList/TaskList';
import type { Task } from './types';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Complete the project',
    status: 'pending',
    priority: 'high',
    dueDate: '2025-08-10',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Update Visual Studio',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2025-08-07',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Check email',
    status: 'completed',
    priority: 'low',
    dueDate: '2025-08-01',
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<{ status?: string; priority?: string }>({});

  const handleStatusChange = (id: string, newStatus: Task['status']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleFilterChange = (filterUpdate: Partial<{ status: string; priority: string }>) => {
    setFilter(prev => ({ ...prev, ...filterUpdate }));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filter.status ? task.status === filter.status : true;
    const matchesPriority = filter.priority ? task.priority === filter.priority : true;
    return matchesStatus && matchesPriority;
  });

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
