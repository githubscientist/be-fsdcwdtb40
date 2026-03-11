// import express library
const express = require('express');

// create an express application
const app = express();

// setup routes for the application
app.get("/", (req, res) => {
    res.json({ message: 'hello, world!' });
});

// export the application
module.exports = app;