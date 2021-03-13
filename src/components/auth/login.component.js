import React, { Component } from "react";
import axios from 'axios';
import md5 from 'md5';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        message: ''
    }

    handlechange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const info = {
            email: this.state.email,
            password: md5(this.state.password)
        }
        axios
            .post("http://localhost:4000/signin", info)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.message))
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" required onChange={this.handlechange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" required onChange={this.handlechange} />
                </div>

                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="warning"> {this.state.message} </p>
            </form>
        );
    }
}