import React from "react";
import SearchBarContainer from "../searchBar/SearchBar";
import StockDataProvider from "../../contexts/StockDataProvider";
import Card from "../stock/card";
import useStockData from "../../hooks/useStockData";

const Home = () => {
  return (
    <StockDataProvider>
      <section>
        <p>Home</p>
        <SearchBarContainer />
        <Card />
      </section>
    </StockDataProvider>
  );
};

export default Home;
