import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName('');
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTaskName(inputValue);
    setBtnDisabled(inputValue.trim() === '');
  }

  return(
    <form className="task-form" onSubmit={handleSubmit}>
      <input onChange={handleInputChange} 
      type="text" name="taskName" placeholder="Enter a new task" value={taskName} />
       <button type="submit" disabled={btnDisabled} aria-label={`Add`}>
        Add
      </button>
    </form>
  );
}
 
export default TaskForm;