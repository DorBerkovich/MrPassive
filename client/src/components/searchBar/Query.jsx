import { IoIosSearch, IoMdSend } from "react-icons/io";
import "./query.css";
import axios from "../../api/axios";
import { useEffect, useRef } from "react";
import useStockData from "../../hooks/useStockData";

const Query = ({ query, setQuery, setShowOptions }) => {
  const controllerRef = useRef(new AbortController());
  const { setStockData } = useStockData();

  useEffect(() => {
    return () => {
      controllerRef.current.abort();
    };
  }, []);

  const sendQuery = async () => {
    if (query === "") return;

    try {
      const { data: stockData } = await axios.get(
        `/searchBar/stockData/${query}`,
        {
          signal: controllerRef.current.signal,
        }
      );
      console.log("stockData", stockData);
      setStockData(stockData);
      setShowOptions(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyDown = (e) => {
    e.key === "Enter" && sendQuery();
  };

  return (
    <div>
      <div className="query">
        <IoIosSearch className="ioIosSearch" />
        <IoMdSend
          className="ioMdSend"
          onClick={() => {
            sendQuery();
            setQuery("");
          }}
        />
        <input
          name="query"
          placeholder="Search for a symbol or a company"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowOptions(true);
          }}
          onFocus={(e) => {
            setShowOptions(true);
          }}
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Query;
