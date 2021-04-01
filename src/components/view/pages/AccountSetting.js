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
                <AdminSidebar />
                <Breadcrumbs  />
                <div className = "w-5/6 h-full float-right mt-36">
                    <AccountArea />
                </div>
            </div>
        );
    }
}
export default withRouter(AccountSetting)