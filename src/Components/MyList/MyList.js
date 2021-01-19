import React from "react";
import Context from "../../Context";
import "./MyList.css";

export default class MyList extends React.Component {
  static contextType = Context;

  render() {
    const IMG_API = `https://image.tmdb.org/t/p/w1280`;
    const movies = this.context.movies;
    return (
      <div className="list">
        <h1>My List</h1>
        <div className="list-container">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img alt="poster" width="250" src={IMG_API + movie.poster_path} />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <p>{movie.vote_average}</p>
                <button
                  className="deletebtn"
                  onClick={() => this.context.deleteMovie(movie.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}