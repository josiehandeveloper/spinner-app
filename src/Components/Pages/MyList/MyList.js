import React from "react";
import Context from "../../../Context";
import "./MyList.css";

export default class MyList extends React.Component {
  static contextType = Context;

  render() {
    const IMG_API = `https://image.tmdb.org/t/p/w500`;
    const { movies = [] } = this.context || [];

    return (
      <div className="list">
        <h1>My List</h1>
        <div className="list-container">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                className="movie-image"
                alt="poster"
                width="250"
                height="370"
                src={IMG_API + movie.poster_path}
              />

              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
              </div>

              <button
                className="deletebtn"
                onClick={() => this.context.deleteMovie(movie.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
