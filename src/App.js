import React, { Component } from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import NavBar from "./Components/NavBar/NavBar";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import FilterOptions from "./Components/FilterOptions/FilterOptions";
import FilterableList from "./Components/FilterableList/FilterableList";

class App extends Component {
  state = {
    content: this.props.content,
    genre: {},
    contentType: "",
    setGenre: (genre) => {
      this.setState({ genre });
    },
    setContentType: (contentType) => {
      this.setState({ contentType });
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <div className="App-header">
            <Route path="/" component={NavBar} />
            <Route path="/" component={Register} />
            <Route path="/" component={Login} />
            <Header />
          </div>

          <FilterOptions />
          <FilterableList />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
