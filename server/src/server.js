const express = require("express");
const server = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
var cookieParser = require("cookie-parser");
const {
  verifyJwt,
  requestLogger,
  credentials,
} = require("./middlewares/allMiddlewares");
const {
  contactRouter,
  signupRouter,
  adminRouter,
  refreshRouter,
  logoutRouter,
  loginRouter,
  searchBarRouter,
  chartsRouter,
} = require("./routes/allRouters");

server.use(credentials);
server.use(cors(corsOptions));
server.use(express.json());
server.use(requestLogger);
server.use(cookieParser());

server.use("/signup", signupRouter);
server.use("/refresh", refreshRouter);
server.use("/logout", logoutRouter);
server.use("/login", loginRouter);
server.use("/searchBar", searchBarRouter);
server.use("/charts", chartsRouter);

// limited access
server.use(verifyJwt);
server.use("/contact", contactRouter);
server.use("/admin", adminRouter);

module.exports = server;
