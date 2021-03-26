import styles from "../Navigation/Navigation.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";
import routes from "../../routes";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to={routes.home}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to={routes.contacts}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
