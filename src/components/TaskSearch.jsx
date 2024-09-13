/* eslint-disable react/prop-types */
import './TaskSearch.css';

function TaskSearch({ setSearchQuery }) {
  return (
    <div className="task-search">
      <input
        type="text"
        placeholder="Buscar tareas..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default TaskSearch;
