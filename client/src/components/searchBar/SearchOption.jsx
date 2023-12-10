import "./searchOption.css";
const SearchOption = ({ symbol, shortname }) => {
  return <input className="searchOption" value={`${symbol} | ${shortname}`} readOnly />;
};

export default SearchOption;
