// TodoList.js
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import tasksData from '../data/tasks.json';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTodoForm addTask={addTask} />
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
};

export default TodoList;

