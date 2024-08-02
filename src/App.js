import './App.css';
import TaskForm from './component/TaskForm';
import Tasks from './component/Tasks';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Initial state from localStorage
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks(prevTasks => [
      ...prevTasks,
      { id: uuidv4(), name: name, done: false }
    ]);
  };

  const removeTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  const tasksDone = tasks.filter(task => task.done).length;
  const totalTasks = tasks.length;

  return (
    <div className='container'>
      {totalTasks === 0 ? (
        <h2>Add your tasks for today!</h2>
      ) : (
        <h2>You have completed {tasksDone} out of {totalTasks} tasks</h2>
      )}
      <TaskForm onAdd={addTask} />
      
      {tasks.map(task => (
        <Tasks key={task.id} {...task} onRemove={() => removeTask(task.id)} onToggleDone={() => toggleTaskDone(task.id)} />
      ))}
    </div>
  );
}

export default App;
