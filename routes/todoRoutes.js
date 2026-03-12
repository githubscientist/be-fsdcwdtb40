// import express
const express = require('express');
const { getAllTodos, getTodoById, createTodo, updateTodo, patchTodo, deleteTodo } = require('../controllers/todoController');

// setup a router <- express
const todoRouter = express.Router();

// setup the routes using the router
todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.patch("/:id", patchTodo);
todoRouter.delete("/:id", deleteTodo);

// export the todoRouter
module.exports = todoRouter;
