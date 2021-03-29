import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import ProductDetailArea from '../../common/productdetailarea';
import Breadcrumbs  from '../../common/breadscrumb';


class ProductDetail extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <ProductDetailArea />
                </div>
            </div>
        );
    }
}
export default withRouter(ProductDetail)