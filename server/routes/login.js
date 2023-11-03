const express = require("express");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  handleLogin(req, res);
});

module.exports = signupRouter;