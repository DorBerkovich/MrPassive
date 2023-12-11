import { Suspense, useState } from "react";
import { IoIosSearch, IoMdSend } from "react-icons/io";
import "./query.css";

const Query = ({ query, setQuery }) => {
  return (
    <div>
      <div className="query">
        <IoIosSearch className="ioIosSearch" />
        <IoMdSend className="ioMdSend" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Query;
