import React, { useState } from 'react'

const TaskForm = ({onAdd}) => {
    const [TaskName, setTaskName] = useState("");
    function handleSubmit (event){
        event.preventDefault();
        onAdd(TaskName);
        setTaskName('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <button>+</button>
          <input 
            type="text"
            placeholder='Your next task...'
            value={TaskName}
            onChange={event => setTaskName(event.target.value)}/>
          
      </form>
  )
}

export default TaskForm