import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import Search from "./Components/Pages/Search/Search";
import MyList from "./Components/Pages/MyList/MyList";
import config from "./config";
import TokenService from "./Services/token-service";
import Homepage from "./Components/Pages/Homepage/Homepage";
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
      fetch(`${config.API_ENDPOINT}/api/movies`, {
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
        })
        .catch((e) => console.log(e));
    },

    deleteMovie: (movieId) => {
      fetch(`${config.API_ENDPOINT}/api/movies`, {
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
      fetch(`${config.API_ENDPOINT}/api/movies`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((movies) => {
          this.setState({ movies });
        })
        .catch((error) => {
          console.error("Error:", error);
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
    if (TokenService.hasAuthToken()) {
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
            <Route path="/dashboard" component={Search} />
          </main>
          <div className="App-footer">
            <Route path="/" component={Footer} />
          </div>
        </div>
      </Context.Provider>
    );
  }
}
