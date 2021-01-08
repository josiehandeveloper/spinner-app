import React from "react";
import Context from "../../Context";

export default class SearchList extends React.Component {
  static contextType = Context;
  render() {
    let movies = this.context.movies;
    return (
      <div className="SearchList">
        {movies.map((movie) => (
          <div>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

/*
export default class FilterableList extends Component {
  static contextType = Context;
  render() {
    let items = this.context.content || [];

    if (this.context.genre) {
      items = items.filter((item) => item.genre === this.context.genre);
    }

    if (this.context.contentType !== "") {
      items = items.filter(
        (item) => item.contentType === this.context.contentType
      );
    }

    return (
      <div className="FilterableList">
        {items.map((item) => (
          <div>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    );
  }
}
*/
