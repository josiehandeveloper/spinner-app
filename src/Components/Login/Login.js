import React from "react";
import AuthAPIService from "../Services/auth-api-service";
import TokenService from "../Services/token-service";

// import { API_BASE_URL } from "../../config";

export default class Login extends React.Component {
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
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <form className="login_form" onSubmit={this.handleLogin}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <h3>Login</h3>
        <label htmlFor="login_email">EMAIL</label>
        <input type="email" id="user_email" name="email" required="" />

        <label htmlFor="login_password">PASSWORD</label>
        <input type="password" id="user_password" name="password" require="" />

        <button type="submit" id="login_button">
          Submit
        </button>
      </form>
    );
  }
}
