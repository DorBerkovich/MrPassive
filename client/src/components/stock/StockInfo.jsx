import useStockData from "../../hooks/useStockData";
import SimpleGraph from "./SimpleGraph";

import "./stockInfo.css";

const StockInfo = () => {
  const { stockData } = useStockData();
  console.log("stockData.symbol", stockData.symbol);
  return (
    stockData.symbol && (
      <div className="stock-info">
        {stockData.shortName && (
          <h2>{stockData.displayName || stockData.shortName}</h2>
        )}
        <ul className="stock-info-list">
          {stockData.symbol && (
            <li>
              symbol <b>{stockData.symbol}</b>
            </li>
          )}
          {stockData.currency && (
            <li>
              currency <b>{stockData.currency}</b>
            </li>
          )}
          {stockData.regularMarketPrice && (
            <li>
              price <b>{stockData.regularMarketPrice}</b>
            </li>
          )}
        </ul>

        <SimpleGraph />
      </div>
    )
  );
};

export default StockInfo;
