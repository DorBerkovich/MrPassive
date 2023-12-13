const express = require("express");
const searchBarRouter = express.Router();
const { getSearchOptions, getStockData } = require("../controllers/searchBar");

searchBarRouter.get("/searchOptions/:query", (req, res) => {
  getSearchOptions(req, res);
});

searchBarRouter.get("/stockData/:query", (req, res) => {
  getStockData(req, res);
});

module.exports = searchBarRouter;
