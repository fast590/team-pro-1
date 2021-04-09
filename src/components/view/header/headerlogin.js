import axios from 'axios';
import React from 'react';
import avata from '../../../avada.jfif';
import { Link, withRouter } from "react-router-dom";


class HeaderLogin extends React.Component {
    
    handleClick = (e)=> {
        axios
        .get("http://localhost:4000/api/users/logout", {withCredentials: true, credentials: 'include'})
        .then(res => {
            console.log(res)
            if(res.data.success) this.props.history.push('/signin')
        })
    }

    render() {
        return (
            <nav className="fixed top-0 z-50 w-full inline-flex bg-white h-20">
                <div className = "logo m-auto w-3/5">
                    <Link to={"/"}>HSJ.io</Link>
                </div>
                <div className="w-1/5 text-center flex float-right" >
                    <div className="nav-items h-auto m-auto relative">
                       <div className = "header-account">
                           <img src = {avata} className = "w-16 h-16" alt="Header Avada" />
                           
                        </div> 
                        <div className = "nav-drowdowns absolute text-left pt-6 bg-white w-40 -left-0.5  pl-1 hidden">

                            <div>
                                <Link className="pt-3" to={"/myacount/profile"}>Edit Profile</Link>
                            </div>
                            <div>
                                <button className="pt-2 pb-2" onClick = {this.handleClick}>Logout</button>
                                
                            </div> 
                        </div>  
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(HeaderLogin)