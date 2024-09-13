import { useState } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSearch from './components/TaskSearch';
import TaskFilters from './components/TaskFilters';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const addTask = (taskText, category, dueDate) => {
    const newTask = {
      text: taskText,
      category,
      dueDate,
      createdAt: new Date(),
      completedAt: null,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (index, newText, newCategory, newDueDate) => {
    const updatedTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, text: newText, category: newCategory, dueDate: newDueDate };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        return { ...task, completed: !task.completed, completedAt: task.completed ? null : new Date() };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === '' || task.category === filterCategory;
    const matchesStatus =
      filterStatus === '' ||
      (filterStatus === 'completed' && task.completed) ||
      (filterStatus === 'pending' && !task.completed);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="app-container">
      <Header />
      {tasks.length > 1 && (
        <>
          <TaskSearch setSearchQuery={setSearchQuery} />
          <TaskFilters setFilterCategory={setFilterCategory} setFilterStatus={setFilterStatus} />
        </>
      )}
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
