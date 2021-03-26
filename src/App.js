import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";
import Loader from "./Components/Loader/Loader";

const HomePage = lazy(() =>
  import("./pages/homePage/HomePage" /* webpackChunkName: "Home-Page" */)
);

const ContactsPage = lazy(() =>
  import(
    "./pages/contactsPage/ContactsPage" /* webpackChunkName: "Contacts-Page" */
  )
);

const RegisterPage = lazy(() =>
  import(
    "./pages/registerPage/RegisterPage" /* webpackChunkName: "Register-Page" */
  )
);

const LoginPage = lazy(() =>
  import("./pages/loginPage/LoginPage" /* webpackChunkName: "Login-Page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
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
        </Suspense>
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
