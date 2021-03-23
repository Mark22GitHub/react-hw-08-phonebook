import React, { Component } from "react";
import styles from "../loginPage/LoginPage.module.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>

        <form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            E-mail
            <input type="email" name="email" />
          </label>

          <label className={styles.label}>
            Password
            <input type="password" name="password" />
          </label>

          <button className={styles.button} type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
