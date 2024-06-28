import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartSlice";
import checkOutReducer from "./CheckOutSlice";
import customerReducer from "./customerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userReducer,
    checkout: checkOutReducer,
    cart: cartReducer,
    user: userReducer,
    customer: customerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
