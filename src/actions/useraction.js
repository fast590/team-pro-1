import axios from 'axios';
import {LOGIN_USER, REGISTER_USER, AUTH_USER, EDIT_USER} from './types';

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
       const request =  axios
            .post("http://localhost:4000/api/users/signup", data, {withCredentials: true, credentials: 'include'})
            .then(res => res.data)
        
        return {
            type:REGISTER_USER,
            payload:request
        }
}

export function editUser(data) {
    const request =  axios
         .post("http://localhost:4000/api/users/editpro", data, {withCredentials: true, credentials: 'include'})
         .then(res => res.data)
     
     return {
         type:EDIT_USER,
         payload:request
     }
 }

export function auth() {
   const request =  axios
        .get("http://localhost:4000/api/users/auth", {withCredentials: true, credentials: 'include'})
        .then(res => res.data)
    
    return {
        type:AUTH_USER,
        payload:request
    }
}




