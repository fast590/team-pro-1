import React, { Component } from "react";
import axios from 'axios';
import md5 from 'md5';

class SignUp extends Component {
    state = {
        name: '',
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
        const nameValid = /^[a-zA-Z]+$/;
        if (!nameValid.test(this.state.name)) return this.setState({ message: "Plase use a vaild name type" });
        if (this.state.password.length < 5) return this.setState({ message: "Password must be longer than 5" });

        const info = {
            name: this.state.name,
            email: this.state.email,
            password: md5(this.state.password)
        }
        axios
            .post("http://localhost:4000/signup", info)
            .then(res => {
                if (res.data.success === false) this.setState({ message: "Email already exist!" });
                else this.setState({ message: "Thanks for your registration" });
            })
            .catch(err => console.log(err.message))
        this.setState({
            name: '',
            email: '',
            password: '',
            message: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        required
                        onChange={this.handlechange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        required
                        onChange={this.handlechange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.email}
                        required
                        onChange={this.handlechange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
                <p className="warning"> {this.state.message} </p>
            </form>

        );
    }
}
export default SignUp;