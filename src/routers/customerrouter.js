import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customers from '../components/view/pages/customers'
import CustomerListing from '../components/view/pages/customerlisting'
import CustomerDetail from '../components/view/pages/customerdetail'
import CustomerAdd from '../components/view/pages/customeradd'


function CustomerRouter() {
    return (
        <Router>
            <Route exact path="/customers" component={Customers} />
            <Route path="/customers/listing-page" component={CustomerListing} />
            <Route path="/customers/detail-page" component={CustomerDetail} />
            <Route path="/customers/add-page" component={CustomerAdd} />
        </Router>
    );
  }
  
  export default CustomerRouter;