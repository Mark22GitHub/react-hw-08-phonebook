import React from "react";
import { connect } from "react-redux";
import styles from "../UserMenu/UserMenu.module.css";

import { authSelectors } from "../../redux/auth";

const UserMenu = ({ email, name, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.email}>Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

export default connect(mapStateToProps)(UserMenu);
