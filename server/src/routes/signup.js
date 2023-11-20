const express = require("express");
const signupRouter = express.Router();
const { createUser } = require("../controllers/signup");

signupRouter.post("/", (req, res) => {
  createUser(req, res);
});

module.exports = signupRouter;
