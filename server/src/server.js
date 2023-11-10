const express = require("express");
const server = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");
const { verifyJwt, requestLogger } = require("./middlewares/allMiddlewares");
const {
  contactRouter,
  signupRouter,
  adminRouter,
  refreshRouter,
  logoutRouter,
} = require("./routes/allRouters");

server.use(cors());
server.use(express.json());
server.use(requestLogger);
server.use(cookieParser());

server.use("/signup", signupRouter);
server.use("/refresh", refreshRouter);
server.use("/logout", logoutRouter);

// limited access
server.use(verifyJwt);
server.use("/contact", contactRouter);
server.use("/admin", adminRouter);

module.exports = server;
