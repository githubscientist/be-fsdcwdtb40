// import express library
const express = require('express');
const todoRouter = require('./routes/todoRoutes');

// create an express application
const app = express();

// setup routes for the application
app.use("/todos", todoRouter);

// export the application
module.exports = app;