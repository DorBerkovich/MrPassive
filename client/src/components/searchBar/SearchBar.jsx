import { Suspense, useEffect, useState } from "react";
import Query from "./Query";
import SearchOption from "./SearchOption";
import axios from "../../api/axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  console.log("options", options);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const currentQuery = query
    const getOptions = async () => {
      try {
        const { data } = await axios.get(`/searchBar/searchOptions/${query}`, {
          signal: controller.signal,
        });
        const optionsArray = data.quotes;
        console.log(optionsArray);
        isMounted && setOptions(optionsArray);
        console.log("currentQuery:", currentQuery)
      } catch (e) {
        console.log(e);
      }
    };
    getOptions();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [query]);

  return (
    <section>
      <Query query={query} setQuery={setQuery} />
      {
        <div>
          {options &&
            options.map((option, i) => {
              console.log(option.symbol);
              return <SearchOption symbol={option.symbol} shortname={option.shortname} key={i} />;
            })}
        </div>
      }
    </section>
  );
};

export default SearchBar;
