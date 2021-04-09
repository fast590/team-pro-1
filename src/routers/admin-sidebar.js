import React from 'react';
import { Link, withRouter } from "react-router-dom";

function AdminSidebar(props) {  
    
    return(
        <div className = "h-screen w-1/6 bg-gray-500 admin-sidebar fixed top-0 pt-20">
            <div className = "w-full ">
                <Link to = {'/dashbord'} className = "text-current">
                    <h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Dashboard </h6>
                </Link>
            </div>
            <div className = "w-full  ">
                <Link to = {'/account'} className = "text-current">  <h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Account settings </h6></Link>
                {/* <ul className = "mb-0">
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/account/listing-page'} className = "text-current"> Listing page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/account/detail-page'} className = "text-current">Detail page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/account/add-page'} className = "text-current"> Add new page </Link>
                    </li>
                </ul> */}
            </div>
            <div className = "w-full ">
                <Link to = {'/rep-manage'} className = "text-current"> <h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Rep Management </h6></Link>
            </div>
            <div className = "w-full ">
                <Link to = {'/product'} className = "text-current"><h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Products </h6></Link>
                {/* <ul className = "mb-0">
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/product/listing-page'} className = "text-current">  Listing page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/product/detail-page'} className = "text-current">  Detail page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/product/add-page'} className = "text-current"> Add new page </Link>
                    </li>
                </ul> */}
            </div>
            <div className = "w-full ">
                <Link to = {'/customers'} className = "text-current"> <h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Customers </h6></Link>
                {/* <ul className = "mb-0">
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/customers/listing-page'} className = "text-current">     Listing page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/customers/detail-page'} className = "text-current">     Detail page </Link>
                    </li>
                    <li className = "leading-8 	text-white pl-8 cursor-pointer	">
                        <Link to = {'/customers/add-page'} className = "text-current">     Add new page</Link>
                    </li>
                </ul> */}
            </div>
            <div className = "w-full ">
                <Link to = {'/analytics'} className = "text-current"><h6 className ="justify-center leading-10 mb-0  pl-6 cursor-pointer"> Analytics </h6></Link>
            </div>
        </div>
    )  
}

export default withRouter(AdminSidebar)