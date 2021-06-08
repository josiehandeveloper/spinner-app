import React from "react";
import Context from "../../Context";
import TokenService from "../../Services/token-service";
import "./SearchList.css";

export default class SearchList extends React.Component {
  static contextType = Context;

  state = {
    isToggleOn: false,
  };

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const IMG_API = `https://image.tmdb.org/t/p/w500`;
    const { results = [] } = this.context || [];

    return (
      <div className="searchlist">
        <div className="movie-container">
          {results
            .filter((movie) => movie.poster_path)
            .map((movie) => (
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
                    <small> {movie.release_date.substring(0, 4)}</small>
                  </p>
                  <p>
                    <small>Rating: {movie.vote_average}</small>
                  </p>
                  {TokenService.hasAuthToken() ? (
                    <button
                      className="addbtn"
                      onClick={() => this.context.addMovieToList(movie)}
                    >
                      Add to My List
                    </button>
                  ) : (
                    <button className="addbtn" onClick={() => this.login()}>
                      Add to My List
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
