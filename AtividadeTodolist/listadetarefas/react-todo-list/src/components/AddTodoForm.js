import React, { useState } from 'react';

const AddTodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTask({ id: Date.now(), title: newTask });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Adicionar tarefa</button>
    </form>
  );
};

export default AddTodoForm;
