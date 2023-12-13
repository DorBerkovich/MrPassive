import "./searchOption.css";
const SearchOption = ({ symbol, shortname, setQuery, setShowOptions }) => {
  return (
    <div
      className="searchOption"
      onMouseDown={(e) => {
        console.log("in on click");
        e.preventDefault();
        setQuery(symbol);
        setShowOptions(false);
      }}
    >
      {symbol} | {shortname}
    </div>
  );
};

export default SearchOption;
