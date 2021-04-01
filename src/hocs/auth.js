import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { auth } from "../actions/useraction";


export default function(SpecialComponent, option, adminRoute = null){

    function AuthenticationCheck(props) {
        
        const dispatch = useDispatch() 
        
        useEffect(() => {

            dispatch(auth()).then(res => {
                console.log(res)
                if (!res.payload.isAuth){
                    if(option) props.history.push('/signup')
                } 
                if (res.payload.isAuth) {
                    if(!option) props.history.push('/')
                }
            })
        }, [])

        return (
            <SpecialComponent />
        )
    }
    return AuthenticationCheck
}
