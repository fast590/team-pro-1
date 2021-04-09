import React, { useState ,useEffect} from "react";
import { withRouter } from "react-router";
import HeaderLogin from '../header/headerlogin';
import {useDispatch} from 'react-redux';
import {editUser} from '../../../actions/useraction'
import {useSelector} from 'react-redux'

function Profile(props){

    const dispatch = useDispatch()

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [Message, setMessage] = useState("")
    
    const onNameHandler = (e) => {
        setMessage("")
        setName(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = (e) => {
        setMessage("")
        setconfirmPassword(e.currentTarget.value)
    }

   const onEmailHandler = (e) => {
        setMessage("")
        setEmail(e.currentTarget.value)
    }
    
    const onPasswordHandler =(e) => {
        setMessage("")
        setPassword(e.currentTarget.value)
    }
    
    const user = useSelector((state) => state.user);
    
    useEffect(() => {
        setName(user.userData.name)
        setEmail(user.userData.email)
    }, [user.userData.name, user.userData.email])
    
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
        dispatch(editUser(body))
             .then(res =>{   
                 props.history.push('./dashbord')
                })
         setMessage("")
    }

    return (
        <div className="App">
            <HeaderLogin />
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={handleSubmit} >
                        <h3>Edit your Info</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={Name}
                                required
                                autoComplete = "off"
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
                                autoComplete = "off"
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
                                autoComplete = "off"
                                onChange={onPasswordHandler} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmpassword"
                                className="form-control"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                autoComplete = "off"
                                required
                                onChange={onConfirmPasswordHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Change</button>
                        <p className="warning"> {Message} </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default withRouter(Profile)