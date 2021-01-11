import React from "react";
import Context from "../../Context";

export default class MyList extends React.Component {
  static contextType = Context;

  render() {
    const IMG_API = `https://image.tmdb.org/t/p/w1280`;
    const movies = this.context.movies;
    return (
      <div className="SearchList">
        {movies.map((movie) => (
          <div>
            <img alt="poster" width="200" src={IMG_API + movie.poster_path} />

            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
          </div>
        ))}
      </div>
    );
  }
}
