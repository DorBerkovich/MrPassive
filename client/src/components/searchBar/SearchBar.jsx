import { Suspense, useState } from "react";
import { IoIosSearch, IoMdSend } from "react-icons/io";
import "./searchBar.css";

const SearchBar = ({ setStockSymbol }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="searchBar">
        <IoIosSearch className="ioIosSearch" />
        <IoMdSend className="ioMdSend" />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setStockSymbol(e.target.value);
          }}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SearchBar;
