import styles from "../AuthNav/AuthNav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
