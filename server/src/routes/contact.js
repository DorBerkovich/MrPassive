const express = require("express");
const contactRouter = express.Router();
const  createMassage = require("../controllers/contact");

contactRouter.post("/", (req, res) => {
  createMassage(req, res);
});

module.exports = contactRouter;
