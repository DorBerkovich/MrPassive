import React from "react";
import SearchBarContainer from "../searchBar/SearchBar";
import StockDataProvider from "../../contexts/StockDataProvider";
import StockInfo from "../stock/StockInfo";

const Home = () => {
  return (
    <StockDataProvider>
      <section>
        <p>Home</p>
        <SearchBarContainer />
        <StockInfo />
      </section>
    </StockDataProvider>
  );
};

export default Home;
