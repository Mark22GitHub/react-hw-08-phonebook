import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

const App = () => (
  <>
    <AppBar />

    <Switch>
      {/* <Route exact path="/" component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} /> */}
      <Route path="/contacts" component={ContactsPage} />
    </Switch>
  </>
);

export default App;
