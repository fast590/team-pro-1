import React from 'react';
import HeaderLogin from '../header/headerlogin';
import AdminSidebar from '../../../routers/admin-sidebar';
import ProductDetailArea from '../../common/producteditarea';
import Breadcrumbs  from '../../common/breadscrumb';
import { withRouter } from 'react-router-dom';

function ProductDetail(props) {
    return (
        <div className = "w-full h-full">
            <HeaderLogin />
            <AdminSidebar />
            <Breadcrumbs  />
            <div className = "w-5/6 h-full float-right mt-36">
                <ProductDetailArea product = {props.location.productProps} />
            </div>
        </div>
    );
}
export default withRouter(ProductDetail)