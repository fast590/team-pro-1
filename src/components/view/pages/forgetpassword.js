import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import Header from '../header/header';


class ForgetPassword extends Component {
    state = {
        email:'',
        message:'Forget Password? Enter Your Email'
    }
    handlechange = (e) => {
        this.setState({message:"Forget Password? Enter Your Email"})
        this.setState({email:e.target.value})
    }
    handlesubmit = (e) => {
        e.preventDefault();
        var data = {
            email:this.state.email
        }
        axios
            .post('http://localhost:4000/api/users/resetpass', data, {withCredentials: true, credentials: 'include'})
            .then(res => {
                    console.log(res)
                if(!res.data.success) {
                    this.setState({message:"We sent a new password to your email. Please check your email!"})
                }
            })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="auth-wrapper">
                    <h2 className = "text-center">  </h2>
                    <div className="auth-inner">
                        <form onSubmit = {this.handlesubmit}>
                            <h4 className = "text-center">{this.state.message}</h4>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" name="email" value = {this.state.email} className="form-control" placeholder="Enter email" required onChange= {this.handlechange} />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                <a href="/signin">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ForgetPassword)