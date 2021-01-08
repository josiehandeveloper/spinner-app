import React, { Component } from "react";
import Context from "../../Context";
import "./SearchBar.css";

export default class FilterOptions extends Component {
  static contextType = Context;

  state = {
    searchTerm: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.setSearchTerm(this.state.searchTerm);
    this.context.handleSearch();
  };

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={this.handleSubmit}>
          <div className="searchBox">
            <input
              style={{
                fontSize: 15,
                display: "block",
                width: "99%",
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
              }}
              placeholder="Search Content"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
