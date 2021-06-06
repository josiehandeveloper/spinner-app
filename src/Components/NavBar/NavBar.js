import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./NavBar.css";
import TokenService from "../../Services/token-service";

export default class NavBar extends Component {
  logout = (e) => {
    e.preventDefault();
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="nav">
        <Link to="/">
          <img className="nav_logo" src={Logo} alt="website logo/homepage" />
        </Link>

        {TokenService.hasAuthToken() ? (
          <div className="authLinks">
            <a
              className="nav_logout"
              type="submit"
              href="/logout"
              onClick={(e) => this.logout(e)}
            >
              Logout
            </a>

            <Link to="/movies" className="mylist">
              My List
            </Link>
          </div>
        ) : (
          <div className="nav_link">
            <Link className="nav_login" to="/login">
              Login/Register
            </Link>
            <Link to="/dashboard" className="findMovies">
              Find Movies
            </Link>
          </div>
        )}
      </div>
    );
  }
}
