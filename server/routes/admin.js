const express = require("express");
const adminRouter = express.Router();
const { getAllMassages } = require("../controllers/admin");


adminRouter.get("/admin", (req, res) => {
    getAllMassages(req, res);
  });

module.exports = adminRouter