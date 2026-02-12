const http = require("http");

const PORT = 6000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    "Hello, World!\n" +
    "Hello, My name is Mohan\n" +
    "I have total 7 years of experience\n" +
    "Currently working with Cognizant\n" +
    "Thank you\n"
  );
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
