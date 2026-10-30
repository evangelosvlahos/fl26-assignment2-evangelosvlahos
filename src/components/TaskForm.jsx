import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim()) {
      // add the task to the list
      onAddTask(taskName.trim());
      // clear the name
      setTaskName('');
      // disable the button until the user types a new task
      setBtnDisabled(true);
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
       <button type="submit" disabled={btnDisabled}>
        Add
      </button>
    </form>
  );
}
 
export default TaskForm;