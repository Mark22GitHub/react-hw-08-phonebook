import React from "react";
import { connect } from "react-redux";
import styles from "../UserMenu/UserMenu.module.css";

import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.email}>Welcome, {email}</span>
    <button className={styles.button} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
