import React, { Component } from "react";
import Context from "../../Context";

export default class FilterableList extends Component {
  static contextType = Context;
  render() {
    const items = this.context.content || [];

    if (this.context.genre.value) {
      items = items.filter((item) => item.genre === this.context.genre.value);
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
