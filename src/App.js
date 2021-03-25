import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import HomePage from "./pages/homePage/HomePage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
          />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterPage}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginPage}
          />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// const App = () => (
//   <>
//     <AppBar />

//     <Switch>
//       <Route exact path="/" component={HomePage} />
//       <Route path="/contacts" component={ContactsPage} />
//       <Route path="/register" component={RegisterPage} />
//       <Route path="/login" component={LoginPage} />
//     </Switch>
//   </>
// );

// export default App;
