import axios from 'axios';
import React from 'react';
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
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <Link className="navbar-brand" to={"/"}>HSJ.io</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        My Account
                    </li>
                    <div className = "nav dropdown">
                        <li>
                            <Link className="nav-link" to={"/dashbord"}>Dashobord</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={"/myacount/profile"}>Edit Profile</Link>
                        </li>
                        <li>
                            <button className="nav-link" onClick = {this.handleClick}>Logout</button>
                            
                        </li> 
                    </div>  
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(HeaderLogin)