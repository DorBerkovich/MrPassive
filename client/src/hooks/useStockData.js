import { useContext } from "react";
import { stockDataContext } from "../contexts/StockDataProvider";

const useStockData = () => {
  const { stockData, setStockData } = useContext(stockDataContext);
  return { stockData, setStockData };
};

export default useStockData
