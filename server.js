// import the http module
// in nodejs, imports happens through require() function
const http = require('http');

// create a http server
const server = http.createServer((request, response) => {
    response.end("Response from NodeJS Server");
});

// start the http server
server.listen(3001, "127.0.0.1", () => {
    console.log('server is running at http://127.0.0.1:3001 ...');
});