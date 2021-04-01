import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../hocs/auth";
import Login from "../components/user/user.login";
import SignUp from "../components/user/user.signup";
import Profile from "../components/view/pages/profile";
import ForgetPassword from "../components/view/pages/forgetpassword";

function UserRouter() {
    return (
        <Router>
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/myacount/profile" component={Auth(Profile, true)} />
            <Route path="/forget-password" component={ForgetPassword} />
        </Router>
    );
  }
  
  export default UserRouter;