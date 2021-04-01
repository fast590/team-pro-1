import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../hocs/auth";
import RepManage from '../components/view/pages/repmanage';
import Analytics from '../components/view/pages/analytics'
import homePage from "../components/view/pages/homepage";
import Admin from "../components/view/pages/admin";

function ReportRouter() {
    return (
        <Router>
            <Route path="/rep-manage" component={RepManage} />
            <Route path="/analytics" component={Analytics} />
            <Route exact path='/' component={Auth(homePage, true)} />
            <Route path="/dashbord" component={Auth(Admin, true)} />
        </Router>
    );
  }
  
  export default ReportRouter;