const express = require("express");
const chartsRouter = express.Router();
const { getSimpleGraphData } = require("../controllers/charts");

chartsRouter.get("/simpleGraph/:symbol/:period", (req, res) => {
  getSimpleGraphData(req, res);
});

module.exports = chartsRouter;
