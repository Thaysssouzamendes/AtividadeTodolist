// TodoItem.js
import React from 'react';

const TodoItem = ({ task, removeTask, toggleCompletion }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => toggleCompletion(task.id)}>
        {task.completed ? 'Desfazer' : 'Concluído'}
      </button>
      <span>&nbsp;</span> { }
      <button onClick={() => removeTask(task.id)}>Remover</button>
    </div>
  );
};

export default TodoItem;


