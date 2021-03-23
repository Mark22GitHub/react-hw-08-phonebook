import React, { Component } from "react";
import styles from "../registerPage/RegisterPage.module.css";

class RegisterPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Registration Form</h1>

        <form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Name:
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="enter name"
            />
          </label>

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
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
