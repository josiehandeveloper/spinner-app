import React, { Component } from "react";
import Context from "../../Context";

export default class FilterOptions extends Component {
  static contextType = Context;

  state = {
    contentType: "",
    genre: {},
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.setGenre(this.state.genre);
    this.context.setContentType(this.state.contentType);
  };

  render() {
    return (
      <div className="FilterOptions">
        <form onSubmit={this.handleSubmit}>
          <div className="FilterOptions__type">
            <label htmlFor="contentType">Movie or TV Show?</label>
            <input
              type="radio"
              value="movie"
              name="contentType"
              onChange={(e) => this.setState({ contentType: e.target.value })}
            />
            <span>Movie</span>
            <input
              type="radio"
              value="tvshow"
              onChange={(e) => this.setState({ contentType: e.target.value })}
            />
            <span>TV Show</span>
          </div>
          <div className="FilterOptions__genre">
            <label htmlFor="genre">Select a genre:</label>
            <select id="genre" onChange={(genre) => this.setState({ genre })}>
              <option value=""></option>
              {this.context.content.map((item) => {
                return <option value={item.genre}>{item.genre}</option>;
              })}
            </select>
          </div>
          <input type="submit" value="Spin" />
        </form>
      </div>
    );
  }
}

/* render() {
    return (
      <div className="FilterOptions">
        <form onSubmit={this.handleSubmit}>
          <div className="FilterOptions__type">
            <label htmlFor="contentType">Movie or TV Show?</label>
            <input
              type="radio"
              value="movie"
              name="contentType"
              onChange={this.context.setContextType}
            />
            <span>Movie</span>
            <input
              type="radio"
              value="tvshow"
              onChange={this.context.setContextType}
            />
            <span>TV Show</span>
          </div>
          <div className="FilterOptions__genre">
            <label htmlFor="genre">Select a genre:</label>
            <Select
              onChange={this.context.setGenre}
              options={[
                ...new Set(this.context.content.map((item) => item.genre)),
              ]
                .sort()
                .map((genre) => {
                  return {
                    value: genre,
                    label: genre.toUpperCase(),
                  };
                })}
            />
          </div>
          <input type="submit" value="Spin" />
        </form>
      </div>
    );
  } */
