// src/components/TodoList.jsx

import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AlertMessage from './AlertMessage';
import LoadingSpinner from './LoadingSpinner';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', type: '' });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const todos = await getTodos();
      setTodos(todos);
    } catch (error) {
      setAlert({ message: 'Failed to fetch todos', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) {
      setAlert({ message: 'Todo title cannot be empty', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      const todo = await addTodo({ title: newTodo });
      setTodos([...todos, todo]);
      setNewTodo('');
      setAlert({ message: 'Todo added successfully!', type: 'success' });
    } catch (error) {
      setAlert({ message: 'Failed to add todo', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleTodo = async (id) => {
    const todo = todos.find((todo) => todo._id === id);
    setLoading(true);
    try {
      const updatedTodo = await updateTodo(id, { completed: !todo.completed });
      setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)));
    } catch (error) {
      setAlert({ message: 'Failed to update todo', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTodo = async (id) => {
    setLoading(true);
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo._id !== id));
      setAlert({ message: 'Todo deleted successfully!', type: 'success' });
    } catch (error) {
      setAlert({ message: 'Failed to delete todo', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const closeAlert = () => setAlert({ message: '', type: '' });

  return (
    <div className="todo-list">
      <AlertMessage message={alert.message} type={alert.type} onClose={closeAlert} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form onSubmit={handleAddTodo} className="animate__animated animate__fadeInDown">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add new task..."
            />
            <button type="submit">
              <i className="fas fa-plus"></i> Add
            </button>
          </form>
          <div className="todos">
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
