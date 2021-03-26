import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import AccountDetailArea from '../../common/accountdetailingarea';
import Breadcrumbs  from '../../common/breadscrumb';


class AccountDetail extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <AccountDetailArea />
                </div>
            </div>
        );
    }
}
export default withRouter(AccountDetail)