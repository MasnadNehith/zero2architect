
const http = require('http');
const port = 3000;
const hostname = "aws host name";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at port ${port}`);
});
