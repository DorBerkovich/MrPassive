const express = require("express");
const searchBarRouter = express.Router();
const { getSearchOptions } = require("../controllers/searchBar");

searchBarRouter.get("/searchOptions/:query", (req, res) => {
  getSearchOptions(req, res);
});

module.exports = searchBarRouter;
