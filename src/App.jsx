import './App.css'

// Assignment 2: build the Task Manager here.
// Step 1 (after the Oct 12 class): hard-coded tasks, the five components, props.
// Step 2 (after the Oct 19 class): useState, the controlled form, toggle, delete, filtering.

import { useState } from 'react'

import TaskList from './components/TaskList'
import TaskHeader from './components/TaskHeader'
import TaskForm from './components/TaskForm'
import TaskFilter from './components/TaskFilter'

import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const [tasks, setTasks] = useState([
    /*
    { id: 1, text: 'Call Mom', completed: false },
    { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, text: 'Return the textbook to Josie', completed: false },
    { id: 4, text: 'Buy the new album by Rake', completed: false },
    { id: 5, text: 'Buy a gift card for Dad', completed: false },
     */
  ]);

  const [filter, setFilter] = useState('all'); // all, active, completed
  // Derived state - computed from existing state
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  const handleAddTask = (taskName) => {
    const maxId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) : 0;
    const newTask = {
      id: maxId + 1,
      text: taskName,
      completed: false
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const handleRemoveTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <TaskHeader tasks={tasks} />
      <div className="container">
        <aside className="sidebar">
            <nav>
                <ul>
                    <li className="li-active">
                        <a href="#"><img src={inboxIcon} alt="" /> Inbox<span className="task-count">5</span></a>
                    </li>
                    <li>
                        <a href="#"><img src={calendarIcon} alt="" /> Today<span className="task-count">5</span></a>
                    </li>
                    <li>
                        <a href="#"><img src={upcomingIcon} alt="" /> Upcoming</a>
                    </li>
                </ul>
            </nav>
        </aside>

        <main className="main-content">
            <h1>Inbox</h1>
            <TaskFilter filter={filter} setFilter={setFilter} />
           <TaskList tasks={filteredTasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} /> 
           <TaskForm onAddTask={handleAddTask} />
        </main>
    </div>

    </div>
  )
}

export default App
