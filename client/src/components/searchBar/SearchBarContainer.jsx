import { Suspense, useState } from "react";
import SearchBar from "./SearchBar";
import SearchOption from "./SearchOption";

const SearchBarContainer = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  return (
    <section>
      <SearchBar setStockSymbol={setStockSymbol} />
      {stockSymbol && (
        <div>
          <SearchOption stockSymbol={stockSymbol} />
          <SearchOption stockSymbol={stockSymbol} />
          <SearchOption stockSymbol={stockSymbol} />
          <SearchOption stockSymbol={stockSymbol} />
        </div>
      )}
    </section>
  );
};

export default SearchBarContainer;
