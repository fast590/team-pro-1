import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from '../components/view/pages/product'
import ProductListing from '../components/view/pages/productlisting'
import ProductDetail from '../components/view/pages/productdetail'
import ProductAdd from '../components/view/pages/productadd'

function ProductRouter() {
    return (
        <Router>
            <Route exact path="/product" component={Product} />
            <Route path="/product/listing-page" component={ProductListing} />
            <Route path="/product/detail-page" component={ProductDetail} />
            <Route path="/product/add-page" component={ProductAdd} />
        </Router>
    );
  }
  
  export default ProductRouter;