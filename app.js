// import express library
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const authRouter = require('./routes/authRoutes');

// create an express application
const app = express();

// entry point for the request
// parse the request body
app.use(express.json());

// setup routes for the application
app.use("/todos", todoRouter);
app.use("/auth", authRouter);

// export the application
module.exports = app;