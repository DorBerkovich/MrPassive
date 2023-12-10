import "./searchOption.css"
const SearchOption = ({stockSymbol}) => {
  return (
    <input className="searchOption" value={stockSymbol} readOnly/>
  )
}

export default SearchOption