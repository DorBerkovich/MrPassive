const express = require("express");
const refreshRouter = express.Router();
const  handleRefreshToken  = require("../controllers/refresh");

refreshRouter.get("/", (req, res) => {
  handleRefreshToken(req, res);
});

module.exports = refreshRouter;
