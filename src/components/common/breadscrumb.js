import React from 'react';
import { Link, withRouter } from "react-router-dom"; 

function Breadcrumbs (params) {

    var urlArr =  window.location.href.split('/');
    var pathArr = [];

    if(urlArr.length > 3){
        for (let index = 3; index < urlArr.length; index++) {
            if(pathArr.length !== 0) pathArr.push(urlArr[index-1]+ '/' +urlArr[index])
            else pathArr.push(urlArr[index])
        }
    }

    const list = pathArr.map((path, index) => <Link to = {'/'+ path} className = "text-black text-white uppercase" key = {index} > {path.split('/').slice(-1)}</Link>)
     
    return(
        <div className = "float-right fixed w-5/6 mt-20 right-0 pl-6 bg-green-500">
            <Link to = {'/dashbord'} className = "text-black text-white uppercase"> home</Link>
            {list}
        </div>
    )
}

export default withRouter(Breadcrumbs)