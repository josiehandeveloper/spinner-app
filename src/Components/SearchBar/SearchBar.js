import React, { useState } from "react";
import SearchList from "../SearchList/SearchList";
import config from "../../config";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="search-page">
      <div className="searchBar-container">
        <h1 className="searchBar-heading"> What Will You Watch? </h1>
        <input
          className="input"
          placeholder="i.e. Harry Potter"
          value={query}
          onChange={onChange}
        />
      </div>
      {results.length > 0 && (
        <div className="movie-container">
          {results.map((movie) => (
            <div className="movie" key={movie.id}>
              <SearchList movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
