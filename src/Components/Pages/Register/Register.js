import React from "react";
import AuthApiService from "../../../Services/auth-api-service";
import "./Register.css";

export default class Register extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target;
    this.setState({ error: null });

    if (password.value !== confirmPassword.value) {
      return this.setState({
        error: "Please enter matching passwords",
      });
    }
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    })
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} className="form-container">
            {this.state.error && <p className="error">{this.state.error}</p>}
            <h1>Register</h1>

            <label htmlFor="register_email">EMAIL</label>
            <input
              className="email"
              type="email"
              id="register_email"
              name="email"
              required=""
            />

            <div>
              <label htmlFor="register_password">PASSWORD</label>
              <input
                type="password"
                className="register_password"
                id="register_password"
                name="password"
                required=""
              />
            </div>
            <div>
              <label htmlFor="confirm"> CONFIRM PASSWORD</label>
              <input
                type="password"
                className="confirm_password"
                id="confirm_password"
                name="confirmPassword"
                required=""
              />
            </div>

            <button className="submit" type="submit" id="register_button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    );
  }
}
