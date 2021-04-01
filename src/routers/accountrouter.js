import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountSetting from '../components/view/pages/AccountSetting';
import AccountListing from '../components/view/pages/AccountListing';
import AccountDetail from '../components/view/pages/accountdetail';
import AccountAdd from '../components/view/pages/accountadd';

import Auth from "../hocs/auth";

function AccountRouter() {
    return (
        <Router>
            <Route exact path="/account-settings" component={Auth(AccountSetting, true)} />
            <Route path="/account-settings/listing-page" component={Auth(AccountListing, true)} />
            <Route path="/account-settings/detail-page" component={AccountDetail} />
            <Route path="/account-settings/add-page" component={AccountAdd} />
        </Router>
    );
  }
  t
  export default AccountRouter;