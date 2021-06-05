import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import "./Homepage.css";

export default function Homepage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  });

  return (
    <div className="homepage">
      <div className="container">
        <h1> Welcome to Watch It</h1>
        <Link to="/dashboard">
          <button className="getstarted">Let's Get Started</button>
        </Link>
      </div>
      <div className="movie-container">
        {results.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              className="movie-image"
              alt={`${movie.title} poster`}
              width="250"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <h4 className="release_date">
                {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
