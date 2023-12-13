import { useEffect, useState } from "react";
import Query from "./Query";
import SearchOption from "./SearchOption";
import axios from "../../api/axios";
import useDebounce from "../../hooks/useDebounce";

/*  Alot of requests might fail due to the yahoo-finance-2 lib in the server.
    Yahoo blocks whene it recives many requests at the same time.
    I tried to use debounce to solve the issue, its not perfect yet */
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const [options, setOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(true);

  const [errMsg, setErrMsg] = useState("");

  console.log("options", options);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const currentQuery = debouncedQuery;
    const getOptions = async () => {
      try {
        const { data } = await axios.get(
          `/searchBar/searchOptions/${debouncedQuery}`,
          {
            signal: controller.signal,
          }
        );
        const optionsArray = data.quotes;
        console.log(optionsArray);
        isMounted && setOptions(optionsArray);
        console.log("currentQuery:", currentQuery);
      } catch (e) {
        console.log(e);
        console.error(e);
        e.response?.status === 503 &&
          setErrMsg("Check your internet connection");
      }
    };
    debouncedQuery && getOptions();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [debouncedQuery]);

  useEffect(() => setErrMsg(""), [query]);

  return (
    <section
      onBlur={(e) => {
        setShowOptions(false);
      }}
    >
      <Query
        query={query}
        setQuery={setQuery}
        setShowOptions={setShowOptions}
      />
      {
        <div>
          {query &&
            options &&
            showOptions &&
            options.map((option, i) => {
              return (
                <SearchOption
                  symbol={option.symbol}
                  shortname={option.shortname}
                  setQuery={setQuery}
                  setShowOptions={setShowOptions}
                  key={i}
                />
              );
            })}
        </div>
      }
      {errMsg && <p>{errMsg}</p>}
    </section>
  );
};

export default SearchBar;
