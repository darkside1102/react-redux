import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username === "admin" && this.state.password === "12345") {
      localStorage.setItem("isLoginned", true);
      this.setState({ login: "", password: "" });
      alert("Добро пожаловать " + this.state.username);
    } else {
      localStorage.setItem("isLoginned", false);
      alert("Некорректный логин или пароль");
    }
  };
  onChangeUsername = e => {
    const {
      target: { value }
    } = e;
    this.setState({ username: value });
  };
  onChangePassword = e => {
    const {
      target: { value }
    } = e;
    this.setState({ password: value });
  };
  render() {
    const { username, password } = this.state;
    return (
      <Fragment>
        {!localStorage.getItem("isLoginned") ? (
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div>
              <input
                className="login-input"
                required
                type="text"
                name="username"
                value={username}
                placeholder="Введите логин"
                onChange={this.onChangeUsername}
              />
            </div>
            <div>
              <input
                className="login-input"
                required
                type="password"
                name="password"
                value={password}
                placeholder="Введите пароль"
                onChange={this.onChangePassword}
              />
            </div>
            <button className="login" type="submit">
              Войти
            </button>
          </form>
        ) : (
          <Redirect to="/profile" />
        )}
      </Fragment>
    );
  }
}

export default Login;
