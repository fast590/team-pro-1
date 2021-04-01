import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductRouter from './productrouter';
import AccountRouter from './accountrouter';
import CustomerRouter from './customerrouter';
import ReportRouter from './reportrouter';
import UserRouter from './userrouter';


function MainRouter() {
    return (
        <Router>
            <ProductRouter />
            <AccountRouter />
            <CustomerRouter />
            <ReportRouter />
            <UserRouter />
        </Router>
    );
  }
  
  export default MainRouter;