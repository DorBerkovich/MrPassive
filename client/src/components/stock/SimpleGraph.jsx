import "./simpleGragh.css";
import useStockData from "../../hooks/useStockData";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import axios from "../../api/axios";

const SimpleGraph = () => {
  const { stockData } = useStockData();
  const [chartData, setChartData] = useState(null); // TODO
  const [period, setPeriod] = useState("1d"); // 1d 1m 1y 5y
  console.log(stockData.symbol);

  useEffect(() => {
    console.log("in SympleGraph useEffect");
    let isMounted = true;
    const controller = new AbortController();
    const getChartData = async () => {
      console.log("in getChartData");
      const { data } = await axios.get(
        `/charts/simpleGraph/${stockData.symbol}/${period}`,
        {
          signal: controller.signal,
        }
      );

      console.log(data);
      const { labels, datasets } = data; // just to see thats inside...
      setChartData({ labels, datasets });
    };
    isMounted && isMounted && getChartData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [stockData.symbol, period]);

  return chartData && <Line data={chartData} />;
};

export default SimpleGraph;
