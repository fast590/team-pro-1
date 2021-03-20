import React, {Component} from 'react';
import axios from 'axios';
import HeaderLogin from './headerlogin'

export default class Header extends React.Component {
   
   componentDidMount() {
       axios
        .get("http://localhost:4000/api/users/auth")
        .then(res => {
            console.log(res)
            if(res.data.error) {
                // this.props.history.push('/')
            }
        })
   }

    render() {
        return (
            <div>
                <HeaderLogin />
                <h1>
                    Welcome to my Application
                </h1>
            </div>
        );
    }
}