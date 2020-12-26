import React, { Component } from "react";
import Context from "../../Context";

export default class ContentItem extends Component {
  static contextType = Context;
  render() {
    return <div className="ContentItem">{this.context.title}</div>;
  }
}
