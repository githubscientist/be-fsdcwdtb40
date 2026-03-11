// 1. import express library
const express = require('express');

// 2. create an express application
const app = express();

// 3. setup routes for the application
app.get("/", (req, res) => {
    res.json({ message: 'hello, nodejs!' });
});

// 4. start the express application
app.listen(3001, (error) => {
    if (error) {
        console.log('error starting the server:', error.message);
        return;
    }

    console.log('server listening at http://localhost:3001');
});