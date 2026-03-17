// import express library
const express = require('express');
const todoRouter = require('./routes/todoRoutes');
const authRouter = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const logger = require('./middlewares/logger');
const errorRoute = require('./middlewares/errorRoute');

// create an express application
const app = express();

// entry point for the request
// parse the request body
app.use(express.json());

// parse the cookies
app.use(cookieParser());

// log the request
app.use(logger);

// setup routes for the application
app.use("/todos", todoRouter);
app.use("/auth", authRouter);

// when the above routes are not matched with the incoming request
// handle the error router
app.use(errorRoute);

// export the application
module.exports = app;