
function TaskItem({ task, onToggleTask, onRemoveTask }) {
  return (
    <li className={task.completed ? 'task-item completed' : 'task-item'}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
      />
      <span>{task.text}</span>
      <button onClick={() => onRemoveTask(task.id)} aria-label={`Remove "${task.text}"`}>
        Remove
      </button>
    </li>
  );
}

export default TaskItem