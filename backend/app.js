const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api/todos", todoRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
