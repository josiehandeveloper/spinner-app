import React, { Component } from "react";
import FilterOptions from "./Components/FilterOptions/FilterOptions";
import Header from "./Components/Header/Header";
import FilterableList from "./Components/FilterableList/FilterableList";
import "./index.js";
import Context from "./Context";

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
          <Header />
          <FilterOptions />
          <FilterableList />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
