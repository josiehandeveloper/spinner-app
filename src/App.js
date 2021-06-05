import React, { Component, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import SearchBar from "./Components/SearchBar/SearchBar";
import SearchList from "./Components/SearchList/SearchList";
import MyList from "./Components/Pages/MyList/MyList";
import config from "./config";
import TokenService from "./Services/token-service";
import Homepage from "./Components/Pages/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";

const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.API_KEY}`;
// export default class App extends Component {
//   state = {
//     searchTerm: "Harry Potter",
//     results: [],
//     movies: [],
//     homepage: [],
//     setResults: (results) => {
//       this.setState({ results });
//     },

//     /* For Searchbar */
//     addMovieToList: (movie) => {
//       fetch(`${config.API_ENDPOINT}/api/movies`, {
//         headers: {
//           Authorization: `Bearer ${TokenService.getAuthToken()}`,
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(movie),
//       })
//         .then((res) => res.json())
//         .then((newMovie) => {
//           this.setState({ movies: [...this.state.movies, newMovie] });
//         })
//         .catch((e) => console.log(e));
//     },

//     deleteMovie: (movieId) => {
//       fetch(`${config.API_ENDPOINT}/api/movies`, {
//         headers: {
//           Authorization: `Bearer ${TokenService.getAuthToken()}`,
//           "Content-Type": "application/json",
//         },
//         method: "DELETE",
//         body: JSON.stringify({ movie_id: movieId }),
//       }).then(() => {
//         this.setState({
//           movies: this.state.movies.filter((m) => m.id !== movieId),
//         });
//       });
//     },
//     /* My List */
//     getUserMovies: () => {
//       fetch(`${config.API_ENDPOINT}/api/movies`, {
//         headers: {
//           Authorization: `Bearer ${TokenService.getAuthToken()}`,
//           "Content-Type": "application/json",
//         },
//         method: "GET",
//       })
//         .then((res) => res.json())
//         .then((movies) => {
//           this.setState({ movies });
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     },

//   componentDidMount() {
//     this.state.getHomePage();
//     if (TokenService.hasAuthToken()) {
//       this.state.getUserMovies();
//     }
//   }

function App() {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(popularURL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMovies(data.results);
  //     });
  // });

  return (
    // <Context.Provider value={this.state}>
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
      </main>
      <div className="App-footer">
        <Route path="/" component={Footer} />
      </div>
    </div>
    // </Context.Provider>
  );
}
export default App;
