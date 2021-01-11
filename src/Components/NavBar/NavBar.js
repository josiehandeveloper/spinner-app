import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import "./NavBar.css";
import TokenService from "../../Services/token-service";

export default class NavBar extends Component {
  logout = () => {
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
            <Link
              className="nav_logout"
              type="submit"
              onClick={() => this.logout()}
            >
              Logout
            </Link>
            <Link classname="mylist" to="/movies">
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
