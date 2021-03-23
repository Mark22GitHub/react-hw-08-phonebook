import styles from "../Navigation/Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
