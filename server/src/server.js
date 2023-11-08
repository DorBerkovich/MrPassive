const express = require("express");
const server = express();
const cors = require("cors");
const { verifyJwt, requestLogger } = require("./middlewares/allMiddlewares");
const {
  contactRouter,
  signupRouter,
  adminRouter,
} = require("./routes/allRouters");

server.use(cors());
server.use(express.json());
server.use(requestLogger);

server.use("/contact", contactRouter);
server.use("/signup", signupRouter);

// limited access
server.use(verifyJwt);
server.use("/admin", adminRouter);

module.exports = server;
