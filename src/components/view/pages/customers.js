import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import CustomersArea from '../../common/customerarea';
import Breadcrumbs  from '../../common/breadscrumb';


class Customers extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <AdminSidebar />
                <Breadcrumbs  />
                <div className = "w-5/6 h-full float-right mt-36">
                    <CustomersArea />
                </div>
            </div>
        );
    }
}
export default withRouter(Customers)