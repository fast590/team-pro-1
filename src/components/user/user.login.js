import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import Header from '../view/header';
import {loginUser} from '../../actions/useraction'

function Login(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordHandler =(e) => {
        setPassword(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email: Email,
            password: Password
        }
        dispatch(loginUser(body))
            .then(res =>{
                if(res.payload.success) {
                    props.history.push('/dashbord')
                }
            })

    }
    return (
        <div>
            <Header />
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" value = {Email} required onChange={onEmailHandler} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" value = {Password} required onChange={onPasswordHandler} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/reset-password">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login