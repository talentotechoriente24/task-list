/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask(newTask, category, dueDate);
      setNewTask('');
      setCategory('');
      setDueDate('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categoría</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" aria-label="Agregar tarea">
        <FiPlus size={20} />
      </button>
    </form>
  );
}

export default TaskForm;
