import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "../hocs/auth";
import Login from "../components/user/user.login";
import SignUp from "../components/user/user.signup";
import Profile from "../components/view/pages/profile";
import ForgetPassword from "../components/view/pages/forgetpassword";
import RepManage from '../components/view/pages/repmanage';
import Analytics from '../components/view/pages/analytics'
import homePage from "../components/view/pages/homepage";
import Admin from "../components/view/pages/admin";
import Customers from '../components/view/pages/customers'
import AccountSetting from '../components/view/pages/AccountSetting';
import Product from '../components/view/pages/product'
import ProductDetail from '../components/view/pages/productedit'


function MainRouter() {
    return (
        <Router>
            <Route exact path='/' component={Auth(homePage, true)} />
            <Route path="/dashbord" component={Auth(Admin, true)} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/product/edit/:productId" component={ProductDetail} />
            <Route exact path="/account" component={AccountSetting} />
            <Route exact path="/customers" component={Customers} />
            <Route path="/rep-manage" component={RepManage} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/signin" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forget-password" component={ForgetPassword} />
            <Route path="/myacount/profile" component={Auth(Profile, true)} />
        </Router>
    );
  }
  
export default MainRouter;