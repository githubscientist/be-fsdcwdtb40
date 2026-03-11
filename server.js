const app = require("./app");

// start the express application
app.listen(3001, (error) => {
    if (error) {
        console.log('error starting the server:', error.message);
        return;
    }

    console.log('server listening at http://localhost:3001');
});