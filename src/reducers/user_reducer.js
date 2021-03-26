import { 
    LOGIN_USER, 
    REGISTER_USER, 
    AUTH_USER,
    EDIT_USER
} from '../actions/types'

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginsuccess:action.payload}
            break;
        case REGISTER_USER:
            return {...state, registersuccess:action.payload}
            break;
        case AUTH_USER:
            return {...state, userData:action.payload}
            break;
        case EDIT_USER:
                return {...state, edituser:action.payload}
                break;
        default:
            return state;
    }
}