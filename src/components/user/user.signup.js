import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {registerUser} from '../../actions/useraction';
import { withRouter } from "react-router";


function SignUp(props){
    const dispatch = useDispatch()

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [Message, setMessage] = useState("")
    
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setconfirmPassword(e.currentTarget.value)
    }

   const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler =(e) => {
        setPassword(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValid = /^[a-zA-Z]+$/;
        if (!nameValid.test(Name)) return setMessage("Plase use a vaild name type");
        if (Password !== confirmPassword) return setMessage("Password didn't match");

        const body = {
            name: Name,
            email: Email,
            password: Password
        }
        dispatch(registerUser(body))
            .then(res =>{   
                console.log(res)
                if(res.payload.success) {
                    props.history.push('/')
                }
            })
        setMessage("")
    }
    return (
        <div className="App">
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={Name}
                                required
                                onChange={onNameHandler} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={Email}
                                required
                                onChange={onEmailHandler} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={Password}
                                required
                                onChange={onPasswordHandler} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="confirmpassword"
                                className="form-control"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                required
                                onChange={onConfirmPasswordHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/signin">sign in?</a>
                        </p>
                        <p className="warning"> {Message} </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default withRouter(SignUp)