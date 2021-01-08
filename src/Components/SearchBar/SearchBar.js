import React, { Component } from "react";
import Context from "../../Context";
import "./SearchBar.css";

export default class FilterOptions extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="searchBar">
        <form onSubmit={(e) => this.context.handleSearch(e)}>
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
              onChange={(e) => this.context.setSearchTerm(e)}
            />
          </div>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
