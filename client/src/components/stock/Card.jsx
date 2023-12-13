import useStockData from "../../hooks/useStockData";
import "./card.css";

const Card = () => {
  const { stockData } = useStockData();
  console.log("stockData.symbol", stockData.symbol);
  return (
    stockData.symbol && (
      <div className="card">
        <ul className="stockDetails">
          {stockData.symbol && <li key="symbol">{stockData.symbol}</li>}
          {stockData.displayName && (
            <li key="displayName">{stockData.displayName}</li>
          )}
          {stockData.currency && <li key="currency">{stockData.currency}</li>}
        </ul>
      </div>
    )
  );
};

export default Card;
