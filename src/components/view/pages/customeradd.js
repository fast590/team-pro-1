import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import CustomerAddArea from '../../common/customeraddarea';
import Breadcrumbs  from '../../common/breadscrumb';


class CustomerAdd extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <CustomerAddArea />
                </div>
            </div>
        );
    }
}
export default withRouter(CustomerAdd)