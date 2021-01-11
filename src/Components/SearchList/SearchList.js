import React from "react";
import Context from "../../Context";

export default class SearchList extends React.Component {
  static contextType = Context;

  render() {
    const IMG_API = `http://image.tmdb.org/t/p/w1280`;
    const movies = this.context.results;
    return (
      <div className="SearchList">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img alt="poster" width="200" src={IMG_API + movie.poster_path} />

            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>{movie.vote_average}</p>
            <button onClick={this.context.addMovieToList(movie)}>
              Add to My list
            </button>
          </div>
        ))}
      </div>
    );
  }
}
