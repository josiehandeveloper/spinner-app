import React, { Component } from "react";
import Context from "../../Context";
import "./SearchBar.css";

export default class SearchBar extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="search-container">
        <div className="search-wrapper">
          <div className="searchBar">
            <form onSubmit={(e) => this.context.handleSearch(e)}>
              <h1> What Will You Watch? </h1>
              <div className="searchBox">
                <input
                  className="input"
                  placeholder="i.e. Harry Potter"
                  onChange={(e) => this.context.handleChange(e)}
                />
                <input className="searchbtn" type="submit" value="Search" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
