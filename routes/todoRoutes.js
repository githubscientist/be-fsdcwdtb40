// import express
const express = require('express');
const { getAllTodos } = require('../controllers/todoController');

// setup a router <- express
const todoRouter = express.Router();

// setup the routes using the router
todoRouter.get("/", getAllTodos);

// export the todoRouter
module.exports = todoRouter;
