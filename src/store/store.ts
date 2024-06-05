import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    userInfo: userReducer
});

const store = createStore(rootReducer);

export default store;