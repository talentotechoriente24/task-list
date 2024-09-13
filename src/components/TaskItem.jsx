/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FiCheck, FiTrash2, FiEdit } from 'react-icons/fi';
import './TaskItem.css';

function TaskItem({ task, index, toggleTaskCompletion, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newCategory, setNewCategory] = useState(task.category);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);

  const handleEdit = () => {
    if (isEditing) {
      editTask(index, newText, newCategory, newDueDate);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
            <option value="Trabajo">Trabajo</option>
            <option value="Personal">Personal</option>
            <option value="Hogar">Hogar</option>
          </select>
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
        </div>
      ) : (
        <>
          <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
          <div className="task-info">
            <small>Creado: {task.createdAt.toLocaleDateString()} {task.createdAt.toLocaleTimeString()}</small>
            {task.completedAt && <small>Completado: {task.completedAt.toLocaleDateString()}</small>}
            <small>Fecha límite: {task.dueDate}</small>
            <small>Categoría: {task.category}</small>
          </div>
        </>
      )}
      <div className="icons">
        <button className="check-btn" onClick={() => toggleTaskCompletion(index)} aria-label="Marcar como completada">
          <FiCheck size={18} />
        </button>
        <button className="edit-btn" onClick={handleEdit} aria-label="Editar tarea">
          <FiEdit size={18} />
        </button>
        <button className="delete-btn" onClick={() => removeTask(index)} aria-label="Eliminar tarea">
          <FiTrash2 size={18} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
