const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to mongodb database...');

        // start the express application
        app.listen(3001, (error) => {
            if (error) {
                console.log('error starting the server:', error.message);
                return;
            }

            console.log('server listening at http://localhost:3001');
        });
    })
    .catch((error) => {
        console.log('error connecting to mongodb database...', error.message);
    })