const express = require("express");
const server = express();
const { contactRouter, signupRouter, adminRouter } = require("./routes/allRouters");

server.use(express.json());
server.use(contactRouter);
server.use(signupRouter);
server.use(adminRouter);

module.exports = server;
