const express = require("express");
const logoutRouter = express.Router();
const { handleLogout } = require("../controllers/logout");

logoutRouter.get("/", (req, res) => {
  handleLogout(req, res);
});

module.exports = logoutRouter