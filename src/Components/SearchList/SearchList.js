import React from "react";
import Context from "../../Context";
import "./SearchList.css";

export default class SearchList extends React.Component {
  static contextType = Context;

  render() {
    const IMG_API = `https://image.tmdb.org/t/p/w1280`;
    const movies = this.context.results;
    return (
      <div className="movie-container">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                className="movie-image"
                alt="poster"
                width="250"
                src={IMG_API + movie.poster_path}
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
                <p>
                  <small>Overview: {movie.overview}</small>
                </p>
                <button
                  className="addbtn"
                  onClick={() => this.context.addMovieToList(movie)}
                >
                  Add to My List
                </button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
