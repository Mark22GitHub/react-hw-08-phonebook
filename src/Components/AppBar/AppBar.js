import React from "react";
import styles from "../AppBar/AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

export default AppBar;
