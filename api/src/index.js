const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
require("./database");

const server = express();
server.name = "API";

server.use(express.json());
server.use(morgan("dev"));

server.use("/", routes);

module.exports = server;
