// backend/routes/todoRoutes.js

const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// @route   GET /api/todos
// @desc    Get all todos
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/todos
// @desc    Create a new todo
router.post('/', async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({
      title,
      description,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/todos/:id
// @desc    Get a single todo by ID
router.get('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/todos/:id
// @desc    Update a todo by ID
router.put('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }
    res.json(todo);
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/todos/:id
// @desc    Delete a todo by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(404);
      throw new Error('Todo not found');
    }
    res.json({ message: 'Todo removed' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
