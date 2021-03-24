import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../../redux/auth";

import styles from "../loginPage/LoginPage.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.container}>
        <h1>Login Form</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            E-mail:
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="enter e-mail"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password:
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="enter password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

// abbreviated notation mapDispatchToProps
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

// const mapDispatchToProps = (dispatch) => ({
//   onLogin: (data) => dispatch(authOperations.logIn(data)),
// });

export default connect(null, mapDispatchToProps)(LoginPage);
