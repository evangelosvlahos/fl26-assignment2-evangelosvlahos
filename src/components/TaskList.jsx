
import TaskItem from './TaskItem'

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks"> No tasks available.</p>;
  }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleTask={onToggleTask} onRemoveTask={onRemoveTask} />
      ))}
    </ul>
  );
}

export default TaskList