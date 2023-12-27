const yahooFinance = require("yahoo-finance2").default; // NOTE the .default

/** note for me:
 * for recomendetions in search bar use yahooFinance.search. it give the exact results as yahho finance offers
 * for data use yahooFinance.history
 */
const printStockData = async (symbol) => {
  const period = "1y";
  const interval =
    period === "1d"
      ? "15m"
      : period === "1m"
      ? "1d"
      : period === "1y"
      ? "1d"
      : "1wk";

  try {
    let period1 = new Date();
    
    period === "1m"
    ? period1.setMonth(period1.getMonth() - 1)
    : period === "1y"
    ? period1.setFullYear(period1.getFullYear() - 1)
    : period1.setFullYear(period1.getFullYear() - 5);
    
    console.log("period1", period1);
    const chart = await yahooFinance.chart(symbol, {
      period1,
      interval,
    });
    console.log(chart.quotes);
  } catch (e) {
    console.error(e);
  }
};

printStockData("aapl");
