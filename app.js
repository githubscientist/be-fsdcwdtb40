// import express library
const express = require('express');

// create an express application
const app = express();

// setup routes for the application
app.get("/todos", (req, res) => {
    res.json({ message: 'All the todos!' });
});

// export the application
module.exports = app;