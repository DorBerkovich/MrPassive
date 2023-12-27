const yahooFinance = require("yahoo-finance2").default;

const getSimpleGraphData = async (req, res) => {
  const { symbol, period } = req.params;
  console.log(symbol, period);
  const interval =
    period === "1d"
      ? "15m"
      : period === "1m"
      ? "1d"
      : period === "1y"
      ? "1d"
      : "1wk";
  try {
    let chart;
    /** GET THE DATA TO THE CHART
     *  the market isnt oopen every day so if I want to show last day data I
     *  need to search for the last traiding day.
     *  in other periods it doenst metter
     */
    if (period === "1d") {
      let oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const lastWeekData = await yahooFinance.chart(symbol, {
        period1: oneWeekAgo,
        interval: "1d",
        includePrePost: false,
      });
      console.log("lastWeekData: ", lastWeekData);
      const period1 = lastWeekData.meta.currentTradingPeriod.regular.start;
      const period2 = lastWeekData.meta.currentTradingPeriod.regular.end;

      console.log("period1", period1);
      console.log("period2", period2);

      chart = await yahooFinance.chart(symbol, {
        period1,
        period2,
        interval,
      });
    } else {
      let period1 = new Date();
      period === "1m"
        ? period1.setMonth(period1.getMonth() - 1)
        : period === "1y"
        ? period1.setFullYear(period1.getFullYear() - 1)
        : period1.setFullYear(period1.getFullYear() - 5);

      chart = await yahooFinance.chart(symbol, {
        period1,
        interval,
      });
    }
    console.log("chart ---> ", chart);
    const labels = chart.quotes?.map(
      (q) =>
        `${q.date.getHours()}:${q.date.getMinutes()}:${q.date.getSeconds()}`
    );
    const datasets = [{ data: chart.quotes?.map((q) => q.open) }];

    console.log(labels);
    console.log(datasets);

    res.json({ labels, datasets });
  } catch (e) {
    console.error(e);
    res.sendStatus(404);
  }
};

module.exports = { getSimpleGraphData };
