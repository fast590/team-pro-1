import React, { Component } from "react";
import Header from './header';

class ResetPassword extends Component {
    
    render(){
        return (
            <div>
                <Header />
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Change Your Password</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" required onChange = {this.handlechange}  />
                        </div>

                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter password" onChange = {this.handlechange}   />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" name="confirmpassword" className="form-control" placeholder="Confirm password" onChange = {this.handlechange}   />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ResetPassword