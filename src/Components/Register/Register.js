import React from "react";
import AuthApiService from "../../Services/auth-api-service";
import "./Register.css";

export default class Register extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      name: name.value,
      email: email.value,
      password: password.value,
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
      <form className="form_register" onSubmit={this.handleSubmit}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <h3>Register</h3>
        <div>
          <label htmlFor="register_email">EMAIL</label>
          <input type="email" id="register_email" name="email" required="" />
        </div>
        <div>
          <label htmlFor="register_password">PASSWORD</label>
          <input
            type="password"
            id="register_password"
            name="password"
            required=""
          />
        </div>
        <div>
          <label htmlFor="confirm_password"> CONFIRM PASSWORD</label>
          <input
            type="password"
            id="confirm_password"
            name="confirmPassword"
            required=""
          />
        </div>

        <button type="submit" id="register_button">
          SUBMIT
        </button>
      </form>
    );
  }
}
