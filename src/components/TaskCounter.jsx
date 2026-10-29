
function TaskCounter({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (    
      <span>{totalTasks}/{completedTasks}</span>
  );
}

export default TaskCounter;