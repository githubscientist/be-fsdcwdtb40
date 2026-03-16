// import express
const express = require('express');
const { getAllTodos, getTodoById, createTodo, updateTodo, patchTodo, deleteTodo } = require('../controllers/todoController');
const { isAuthenticated, allowRoles } = require('../middlewares/auth');

// setup a router <- express
const todoRouter = express.Router();

// setup the routes using the router

// public routes - unauthenticated users
todoRouter.get("/", getAllTodos);
todoRouter.get("/:id", getTodoById);

// protected routes: allowed roles: ['user']
todoRouter.post("/", isAuthenticated, createTodo);
todoRouter.put("/:id", isAuthenticated, updateTodo);

// protected routes: allowed roles: ['admin']
todoRouter.delete(
    "/:id",
    isAuthenticated,
    allowRoles(['admin']),
    deleteTodo);

// export the todoRouter
module.exports = todoRouter;
