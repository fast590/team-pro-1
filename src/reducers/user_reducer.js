import { 
    LOGIN_USER, 
    REGISTER_USER, 
    AUTH_USER,
    EDIT_USER
} from '../actions/types'

function User(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginsuccess:action.payload}
        case REGISTER_USER:
            return {...state, registersuccess:action.payload}
        case AUTH_USER:
            return {...state, userData:action.payload}
        case EDIT_USER:
            return {...state, edituser:action.payload}
        default:
            return state;
    }
}
export default User