const express = require("express");
const server = express();
const contactRout = require("./routes/contact");

server.use(express.json())
server.use(contactRout);

module.exports = server;
