import React from 'react';

const Tasks = ({ id, name, done, onRemove, onToggleDone }) => {
  return (
    <div className='tasks'>
      <div><input type="checkbox" checked={done} onChange={onToggleDone} />
      {name}</div>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Tasks;
