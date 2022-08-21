// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Hello World!");
//     // end the response
//     res.end();
//   }
//   if (req.url === "/api/book") {
//     res.write(JSON.stringify([1, 2, 3, 4, 5]));
//     // end the response
//     res.end();
//   }
// });

// // reg listener
// // server.on("connection", (Socket) => {
// //   console.log("New Connection...");
// // });

// server.listen(3000);
// console.log("Listening on Port 3000...");

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Node!');
    res.end();
  }
  if (req.url === '/api/number') {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }
});

server.listen(3010);
console.log(`Listening on port 3010`);
