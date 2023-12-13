const yahooFinance = require("yahoo-finance2").default;
yahooFinance.setGlobalConfig({ queue: { concurrency: 8 } });

const getSearchOptions = async (req, res) => {
  const { query } = req.params;
  try {
    const result = await yahooFinance.search(query, {
      quotesCount: 5,
      newsCount: 0,
      enableNavLinks: false,
      enableCb: false,
      enableEnhancedTrivialQuery: false,
    });
    console.log("-----------------");
    console.log("query:", query, "\n");
    result.quotes.length
      ? console.log("--- options:")
      : console.log("--- No availible options");
    result.quotes.length > 0 && result.quotes.map((q) => console.log(q.symbol));
    res.json({ quotes: result.quotes });
  } catch (e) {
    console.log(e);
    res.sendStatus(e.code === "ENOTFOUND" ? 503 : 500);
  }
};

const getStockData = async (req, res) => {
  const { query } = req.params;
  try {
    const stockInfo = await yahooFinance.quote(query);
    console.log("-----------------");
    console.log("query:", query, "\n");  
    console.log(stockInfo);
    res.json(stockInfo);
  } catch (e) {
    console.log(e);
    res.sendStatus(e.code === "ENOTFOUND" ? 503 : 500);
  }
};
module.exports = { getSearchOptions, getStockData };
