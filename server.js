// import the http module
// in nodejs, imports happens through require() function
const http = require('http');

// create a http server
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.end(JSON.stringify({ message: "Welcome!" }));
});

// start the http server
server.listen(3001, "127.0.0.1", () => {
    console.log('server is running at http://127.0.0.1:3001 ...');
});