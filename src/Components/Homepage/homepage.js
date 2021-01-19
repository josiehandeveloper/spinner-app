import React from "react";
import Context from "../../Context";
import "./homepage.css";

export default class Homepage extends React.Component {
  static contextType = Context;
  register = () => {
    this.props.history.push("/register");
  };

  render() {
    const IMG_API = `http://image.tmdb.org/t/p/w1280`;
    const movies = this.context.homepage;
    return (
      <div className="homepage">
        <div className="container">
          <h1> Welcome to Watch It</h1>
          <button className="getstarted" onClick={() => this.register()}>
            Let's Get Started
          </button>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>
            <span className="line-top"></span>
            Watch It allows you to create customized movie lists with our search
            bar. To get started register, login, and you will be redirected to a
            page where you can search for movies. Then add them to your list!
            It's that simple!
            <span className="line-bottom"></span>
          </p>
        </div>
        <div className="movie-container">
          {movies.map((movie) => (
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
                  <small>Release Date: {movie.release_date}</small>
                </p>
                <p>
                  <small>Rating: {movie.vote_average}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
