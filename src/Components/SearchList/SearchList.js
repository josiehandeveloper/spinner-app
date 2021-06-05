import React from "react";
import "./SearchList.css";

function SearchList({ movie }) {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            className="movie-image"
            alt={`${movie.title} poster`}
            width="250"
            height="370"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="movie-info">
        <h3 className="movie-title"> {movie.title}</h3>
        <h4 className="release_date">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </h4>
      </div>
    </div>
  );
}
export default SearchList;
