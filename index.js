//
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.port || 8080;

// Ajoute CORS headers
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // à sécuriser si besoin
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

server.use(middlewares);
server.use(router);
server.listen(port);