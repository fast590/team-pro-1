import {combineReducers} from 'redux';
import user from './user_reducer';
const store = combineReducers({
    user
})

export default store;