import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <Link className="navBarLink" to="/">
          Home
        </Link>
        <Link className="navBarLink" to="/login">
          Login
        </Link>
        <Link className="navBarLink" to="/register">
          Register
        </Link>
      </div>
    );
  }
}
