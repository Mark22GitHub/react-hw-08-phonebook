import React, { Component } from "react";
import styles from "../loginPage/LoginPage.module.css";

class LoginPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Login Form</h1>

        <form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            E-mail:
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="enter e-mail"
            />
          </label>

          <label className={styles.label}>
            Password:
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="enter password"
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

export default LoginPage;
