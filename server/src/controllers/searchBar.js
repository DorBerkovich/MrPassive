const yahooFinance = require("yahoo-finance2").default;

const getSearchOptions = async (req, res) => {
  const { query } = req.params;
  query === "APP" && console.log("-----------------");
  query === "APP" && console.log("query:", query);
  const result = await yahooFinance.search(query, {
    quotesCount: 5,
    newsCount: 0,
    enableNavLinks: false,
    enableCb: false,
    enableEnhancedTrivialQuery: false,
  });
  query === "APP" && console.log(result.quotes);
  res.json({ quotes: result.quotes });
};

module.exports = { getSearchOptions };
