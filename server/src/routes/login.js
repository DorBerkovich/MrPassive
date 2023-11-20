const express = require("express");
const loginRouter = express.Router();
const handleLogin = require("../controllers/login")

loginRouter.post("/", (req, res) => {
  handleLogin(req, res);
});

module.exports = loginRouter;