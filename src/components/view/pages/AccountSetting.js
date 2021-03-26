import React from 'react';
import HeaderLogin from '../header/headerlogin';
import { withRouter } from 'react-router';
import AdminSidebar from '../../../routers/admin-sidebar';
import AccountArea from '../../common/accountsetting';
import Breadcrumbs  from '../../common/breadscrumb';


class AccountSetting extends React.Component {
      
    render() {
        return (
            <div className = "w-full h-full">
                <HeaderLogin />
                <Breadcrumbs  />
                <div className = "w-full h-full">
                    <AdminSidebar />
                    <AccountArea />
                </div>
            </div>
        );
    }
}
export default withRouter(AccountSetting)