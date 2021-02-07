import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import MyList from "./Components/MyList/MyList";
import config from "./config";
import TokenService from "./services/token-service";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  state = {
    searchTerm: "Harry Potter",
    results: [],
    movies: [],
    homepage: [],
    setResults: (results) => {
      this.setState({ results });
    },
    handleChange: (e) => {
      this.setState({ searchTerm: e.target.value });
    },
    /*For the dashboard */
    handleSearch: (e) => {
      e.preventDefault();
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query=${this.state.searchTerm}`;
      fetch(searchURL)
        .then((res) => res.json())
        .then((data) => this.setState({ results: data.results }));
    },
    /* For Searchbar */
    addMovieToList: (movie) => {
      fetch(`${config.API_BASE_URL}/api/movies`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(movie),
      })
        .then((res) => res.json())
        .then((newMovie) => {
          this.setState({ movies: [...this.state.movies, newMovie] });
        });
    },

    deleteMovie: (movieId) => {
      fetch(`${config.API_BASE_URL}/api/movies`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify({ movie_id: movieId }),
      }).then(() => {
        this.setState({
          movies: this.state.movies.filter((m) => m.id !== movieId),
        });
      });
    },
    /* My List */
    getUserMovies: () => {
      fetch(`${config.API_BASE_URL}/api/movies`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((movies) => {
          this.setState({ movies });
        });
    },
    /* Homepage */
    getHomePage: () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ homepage: data.results }));
    },
  };

  componentDidMount() {
    this.state.getHomePage();
    if (TokenService.hasAuthToken) {
      this.state.getUserMovies();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <div className="App-header">
            <Route path="/" component={NavBar} />
          </div>

          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/movies" component={MyList} />
            <Route path="/dashboard" component={SearchBar} />
            <Route path="/dashboard" component={SearchList} />
          </main>
          <div className="App-footer">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}
