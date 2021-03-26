import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/user/user.login";
import SignUp from "./components/user/user.signup";
import homePage from "./components/view/pages/homepage";
import Admin from "./components/view/pages/admin";
import Profile from "./components/view/pages/profile";
import ForgetPassword from "./components/view/pages/forgetpassword";
import Auth from "./hocs/auth";
import AccountSetting from './components/view/pages/AccountSetting';
import AccountListing from './components/view/pages/AccountListing';
import AccountDetail from './components/view/pages/accountdetail';
import AccountAdd from './components/view/pages/accountadd';
import RepManage from './components/view/pages/repmanage';
import Product from './components/view/pages/product'
import ProductListing from './components/view/pages/productlisting'
import ProductDetail from './components/view/pages/productdetail'
import ProductAdd from './components/view/pages/productadd'
import Customers from './components/view/pages/customers'
import CustomerListing from './components/view/pages/customerlisting'
import CustomerDetail from './components/view/pages/customerdetail'
import CustomerAdd from './components/view/pages/customeradd'
import Analytics from './components/view/pages/analytics'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={homePage} />
          {/*======USER LOGIN=========*/}
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forget-password" component={ForgetPassword} />
          {/*======USER PROFILE=========*/}
          <Route path="/myacount/profile" component={Auth(Profile, true)} />
          {/*======USER DASHBORD=========*/}
          <Route path="/dashbord" component={Auth(Admin, true)} />
          {/*======USER ACCOUNT=========*/}
          <Route exact path="/account-settings" component={Auth(AccountSetting, true)} />
          <Route path="/account-settings/listing-page" component={Auth(AccountListing, true)} />
          <Route path="/account-settings/detail-page" component={AccountDetail} />
          <Route path="/account-settings/add-page" component={AccountAdd} />
          {/*======REP MANAGEMENT=========*/}
          <Route path="/rep-manage" component={RepManage} />
          {/*======PRODUCT MANAGEMENT=========*/}
          <Route exact path="/product" component={Product} />
          <Route path="/product/listing-page" component={ProductListing} />
          <Route path="/product/detail-page" component={ProductDetail} />
          <Route path="/product/add-page" component={ProductAdd} />
          {/*======CUSTOMER=========*/}
          <Route exact path="/customers" component={Customers} />
          <Route path="/customers/listing-page" component={CustomerListing} />
          <Route path="/customers/detail-page" component={CustomerDetail} />
          <Route path="/customers/add-page" component={CustomerAdd} />
          {/*======ANALYTICS=========*/}
          <Route path="/analytics" component={Analytics} />
        </Switch>
      </Router>
  );
}

export default App;