const express = require("express");
const server = express();
const cors = require("cors");
const requesLogger = require("./middleware/requestLogger");
const {
  contactRouter,
  signupRouter,
  adminRouter,
} = require("./routes/allRouters");

server.use(cors());
server.use(express.json());
server.use(requesLogger);

server.use("/contact", contactRouter);
server.use("/signup", signupRouter);
server.use("/admin", adminRouter);

module.exports = server;
