import React, { Component } from "react";
import Context from "../../Context";
import "./SearchBar.css";

export default class SearchBar extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={(e) => this.context.handleSearch(e)}>
          <div className="searchBox">
            <input
              className="input"
              placeholder="i.e. Harry Potter"
              onChange={(e) => this.context.handleChange(e)}
            />
          </div>
          <input className="searchbtn" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
