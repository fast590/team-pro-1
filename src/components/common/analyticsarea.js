import React from 'react';
import { withRouter } from 'react-router';
import SalesAnalytics from '../common/chart/sales';
import VisitorAnalytics from '../common/chart/visitors';


function AnalyticsArea(params) {
    
    return (
        <div className = "w-full float-right h-full">
            <h1 className = "text-blue-500 uppercase"> Analytics</h1>
            <div className = "w-10/12 m-auto h-screen">
                <SalesAnalytics />
                <div className = "w-full h-40"></div>
                <VisitorAnalytics />
            </div>
            
        </div>
    )
}
export default withRouter(AnalyticsArea)