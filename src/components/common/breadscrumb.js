import React from 'react';
import { Link, withRouter } from "react-router-dom"; 

function Breadcrumbs (params) {

    var urlArr =  window.location.href.split('/');
    var pathArr = [];

    if(urlArr.length > 4){
        for (let index = 3; index < urlArr.length; index++) {
            if(pathArr.length !== 0) pathArr.push(urlArr[index-1]+ '/' +urlArr[index])
            else pathArr.push(urlArr[index])
        }
    }

    const list = pathArr.map(path => <Link to = {'/'+ path} className = "text-black text-white uppercase"> {path.split('/').slice(-1)}</Link>)
   
    return(
        <div className = "float-right mr-16">
            {list}
        </div>
    )
}

export default withRouter(Breadcrumbs)