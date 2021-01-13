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
import TokenService from "./Services/token-service";

//const popURL = `http://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}`;

export default class App extends Component {
  state = {
    searchTerm: "",
    results: [],
    movies: [],
    setResults: (results) => {
      this.setState({ results });
    },
    handleChange: (e) => {
      this.setState({ searchTerm: e.target.value });
    },
    handleSearch: (e) => {
      e.preventDefault();
      const searchURL = `http://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&query=${this.state.searchTerm}`;
      fetch(searchURL)
        .then((res) => res.json())
        .then((data) => this.setState({ results: data.results }));
    },
    addMovieToList: (movie) => {
      fetch(`${config.API_BASE_URL}/api/movies`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(movie),
      })
        .then((res) => res.json())
        .then((newMovie) => {
          console.log(this.state);
          this.setState({ movies: [...this.state.movies, newMovie] });
        });
    },
    getUserMovies: () => {
      const { user_id } = TokenService.readJwtToken();
      fetch(`${config.API_BASE_URL}/api/movies/${user_id}`, {
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
  };

  // componentDidMount() {
  //   if (TokenService.hasAuthToken) {
  //     this.state.getUserMovies();
  //   }
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <div className="App-header">
            <Route path="/" component={NavBar} />
          </div>

          <main>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/movies" component={MyList} />
            <Route path="/dashboard" component={SearchBar} />
            <Route path="/dashboard" component={SearchList} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}
