import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import config from "./config";

export default class App extends Component {
  state = {
    searchTerm: "",
    movies: [],
    setSearchTerm: (searchTerm) => {
      this.setState({ searchTerm });
    },
    setMovies: (movies) => {
      this.setState({ movies });
    },
    handleSearch: (e) => {
      e.preventDefault();

      let url = `https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=${config.API_KEY}`;
      fetch(url)
        .then((res) => res.json())
        .then((res) => this.setState({ movies: res.movies }));
    },
  };

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
            <Route path="/dashboard" component={SearchBar} />
            <Route path="/dashboard" component={SearchList} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}
