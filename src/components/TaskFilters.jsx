/* eslint-disable react/prop-types */
import './TaskFilters.css';

function TaskFilters({ setFilterCategory, setFilterStatus }) {
  return (
    <div className="task-filters">
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">Todas las Categorías</option>
        <option value="Trabajo">Trabajo</option>
        <option value="Personal">Personal</option>
        <option value="Hogar">Hogar</option>
      </select>
      <select onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">Todos los Estados</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
}

export default TaskFilters;
