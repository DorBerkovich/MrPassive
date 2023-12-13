import { createContext, useState } from "react";

export const stockDataContext = createContext({});

const StockDataProvider = ({ children }) => {
  const [stockData, setStockData] = useState({});

  return (
    <stockDataContext.Provider value={{ stockData, setStockData }}>
      {children}
    </stockDataContext.Provider>
  );
};

export default StockDataProvider
