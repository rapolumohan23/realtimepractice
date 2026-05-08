const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello from Node.js Docker App");
    res.end();
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});
