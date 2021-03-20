import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/user/user.login";
import SignUp from "./components/user/user.signup";
import homePage from "./components/view/homepage";
import Header from "./components/view/header";
import Admin from "./components/view/admin";
import Profile from "./components/view/profile";
import ResetPassword from "./components/view/resetpassword";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="auth-wrapper">
            <Switch>
              <Route exact path='/' component={homePage} />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/dashbord" component={Admin} />
              <Route path="/profile" component={Profile} />
              <Route path="/reset-password" component={ResetPassword} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;