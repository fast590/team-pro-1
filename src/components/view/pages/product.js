import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import ProductArea from '../../common/productarea';
import Breadcrumbs  from '../../common/breadscrumb';


class Product extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <ProductArea />
                </div>
            </div>
        );
    }
}
export default withRouter(Product)