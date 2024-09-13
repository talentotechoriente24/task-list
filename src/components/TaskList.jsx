/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
