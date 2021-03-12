import React from "react";
import AuthAPIService from "../../Services/auth-api-service";
import TokenService from "../../Services/token-service";
import Context from "../../Context";
import "./Login.css";

export default class Login extends React.Component {
  static contextType = Context;
  state = {
    error: null,
  };
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    this.setState({ error: null });
    const user = { email: email.value, password: password.value };

    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        //this.context.getUserMovies();
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form className="login_form" onSubmit={this.handleLogin}>
            {this.state.error && <p className="error">{this.state.error}</p>}

            <label htmlFor="login_email">EMAIL</label>
            <input
              type="email"
              className="email"
              id="user_email"
              name="email"
              required=""
            />

            <label htmlFor="login_password">PASSWORD</label>
            <input
              type="password"
              className="password"
              id="user_password"
              name="password"
              required=""
            />

            <button className="submit" type="submit" id="login_button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}
