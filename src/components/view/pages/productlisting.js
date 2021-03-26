import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import ProductListingeArea from '../../common/productlistingarea';
import Breadcrumbs  from '../../common/breadscrumb';


class ProductListing extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <ProductListingeArea />
                </div>
            </div>
        );
    }
}
export default withRouter(ProductListing)