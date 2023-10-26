const express = require("express");
const contactRouter = express.Router();
const  createMassage = require("../controllers/contact");

contactRouter.post("/contact", (req, res) => {
  createMassage(req, res);
});

module.exports = contactRouter;
