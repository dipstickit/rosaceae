import { createStore, combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer'
import cartReducer from './cartSlice';
import CheckOutReducer from './CheckOutSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    userInfo: userReducer,
    checkout:CheckOutReducer,
    cart:cartReducer
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const store = createStore(rootReducer);

export default store;