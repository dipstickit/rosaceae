import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../types/Item.model";

// Define the initial state
interface CartState {
  cartItems: Items[];
  quantity: number;
  total: number;
  shippingFee: number;
  couponDiscount: number;
  finalTotal: number;
}

const initialState: CartState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  shippingFee: 0,
  couponDiscount: 0,
  finalTotal: 0
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.quantity++;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.itemId === action.payload.itemId
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.cartItems.reduce((total, item) => total + (item.quantity * (item.itemPrice || 0)), 0);
      state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
    },
    increase: (state, action) => {
      state.quantity++;
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.itemId === action.payload.itemId);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      state.total = state.cartItems.reduce((total, item) => total + (item.quantity * (item.itemPrice || 0)), 0);
      state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem.itemId === action.payload.itemId);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity -= 1;
        state.quantity--;
        if (state.cartItems[itemIndex].quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      state.total = state.cartItems.reduce((total, item) => total + (item.quantity * (item.itemPrice || 0)), 0);
      state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
    },
    remove: (state, action) => {
      const cartItem = state.cartItems.find(cartItem => cartItem.itemId === action.payload.itemId);
      if (cartItem) {
        state.cartItems = state.cartItems.filter(item => item.itemId !== cartItem.itemId);
        state.quantity -= cartItem.quantity;
      }
      state.total = state.cartItems.reduce((total, item) => total + (item.quantity * (item.itemPrice || 0)), 0);
      state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
    },
    total: (state) => {
      state.total = state.cartItems.reduce((total, cartItem) => total + (cartItem.quantity * (cartItem.itemPrice || 0)), 0);
    },
    clear: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
      state.finalTotal = 0;
      state.couponDiscount = 0;
    },
    addCoupon: (state, action) => {
      state.couponDiscount = action.payload;
      state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
    },
    finalTotal: (state) => {
      if (state.couponDiscount !== 0) {
        state.finalTotal = (state.total + state.shippingFee) * (1 - state.couponDiscount / 100);
      } else {
        state.finalTotal = state.total + state.shippingFee;
      }
    }
  },
});

export const { add, increase, decrease, remove, total, clear, addCoupon, finalTotal } = CartSlice.actions;
export default CartSlice.reducer;
