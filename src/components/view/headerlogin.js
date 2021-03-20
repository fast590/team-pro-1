import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class HeaderLogin extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                <Link className="navbar-brand" to={"/"}>HSJ.io</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/profile"}>My Profile</Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}