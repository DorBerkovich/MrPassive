const yahooFinance = require("yahoo-finance2").default; // NOTE the .default

/** note for me:
 * for recomendetions in search bar use yahooFinance.search. it give the exact results as yahho finance offers
 * for data use yahooFinance.history
 */
const printStockData = async (symbol) => {
  try {
    const res = await yahooFinance.search(symbol, {
      quotesCount: 5,
      newsCount: 0,
      enableNavLinks: false,
      enableCb: false,
      enableEnhancedTrivialQuery: false,
    });
     console.log(res.count)
  } catch (e) {
    console.error(e);
  }
};

printStockData("psy");
