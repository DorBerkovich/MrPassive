const express = require("express");
const signupRouter = express.Router();
const { createUser } = require("../controllers/signup");

signupRouter.post("/signup", (req, res) => {
  createUser(req, res);
});

module.exports = signupRouter;