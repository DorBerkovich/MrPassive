const express = require("express");
const adminRouter = express.Router();
const { getAllMassages } = require("../controllers/admin");
const verifyAdmin = require("../middlewares/verifyAdmin");

adminRouter.get("/", verifyAdmin, (req, res) => {
  getAllMassages(req, res);
});

module.exports = adminRouter;
