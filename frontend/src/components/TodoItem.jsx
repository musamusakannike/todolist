// src/components/TodoItem.jsx

import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div
      className={`todo-item animate__animated ${
        todo.completed ? 'animate__bounceOutRight' : 'animate__fadeInLeft'
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
      <button onClick={() => onDelete(todo._id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default TodoItem;
