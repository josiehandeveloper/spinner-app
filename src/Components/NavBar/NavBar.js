import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./NavBar.css";
import TokenService from "../../services/token-service";

export default class NavBar extends Component {
  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="nav">
        {TokenService.hasAuthToken() ? (
          <Link to="/dashboard">
            <img className="nav_logo" src={Logo} alt="website logo/homepage" />
          </Link>
        ) : (
          <Link to="/">
            <img className="nav_logo" src={Logo} alt="website logo/homepage" />
          </Link>
        )}
        {TokenService.hasAuthToken() ? (
          <div className="authLinks">
            <Link
              className="nav_logout"
              type="submit"
              onClick={() => this.logout()}
            >
              Logout
            </Link>
            <Link to="/dashboard" className="findMovies">
              Find Movies
            </Link>
            <Link to="/movies" className="mylist">
              My List
            </Link>
          </div>
        ) : (
          <div className="nav_link">
            <Link className="nav_login" to="/login">
              Login
            </Link>
            <Link className="nav_register" to="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    );
  }
}
