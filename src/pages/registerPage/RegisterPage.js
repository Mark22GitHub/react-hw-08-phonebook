import React, { Component } from "react";
import styles from "../registerPage/RegisterPage.module.css";

class RegisterPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Registration Form</h1>

        <form className={styles.form} autoComplete="off">
          <label className={styles.label}>
            Name
            <input type="text" name="name" />
          </label>

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

export default RegisterPage;
