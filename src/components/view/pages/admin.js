import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import Dashbord from '../../common/dashbord';
import Breadcrumbs  from '../../common/breadscrumb';


class Admin extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <Dashbord />
                </div>
            </div>
        );
    }
}
export default withRouter(Admin)