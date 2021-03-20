import axios from 'axios';
import {LOGIN_USER, REGISTER_USER} from './types';

export function loginUser(data) {
       const request =  axios
            .post("http://localhost:4000/api/users/signin", data, {withCredentials: true, credentials: 'include'})
            .then(res => res.data)
        
        return {
            type:LOGIN_USER,
            payload:request
        }
}

export function registerUser(data) {
        console.log(data.name)
        console.log(data.email)
        console.log(data.password)
       const request =  axios
            .post("http://localhost:4000/api/users/signup", data, {withCredentials: true, credentials: 'include'})
            .then(res => res.data)
        
        return {
            type:REGISTER_USER,
            payload:request
        }
}

