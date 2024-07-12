import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../types/Item.model";
import { toast } from "react-toastify";

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
  finalTotal: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const { itemType } = action.payload;
      console.log("itemType trong slice: ", itemType);
      if (itemType.itemTypeId === 1) {
        toast.error("Không thể thêm dịch vụ vào giỏ hàng.");
        return;
      }

      state.quantity++;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.itemId === action.payload.itemId
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.itemPrice || 0),
        0
      );
      state.finalTotal = state.total + state.shippingFee;
    },
    increase: (state, action) => {
      state.quantity++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.itemId === action.payload.itemId
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      state.total = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.itemPrice || 0),
        0
      );
      state.finalTotal = state.total + state.shippingFee;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.itemId === action.payload.itemId
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity -= 1;
        state.quantity--;
        if (state.cartItems[itemIndex].quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }
      state.total = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.itemPrice || 0),
        0
      );
      state.finalTotal = state.total + state.shippingFee;
    },
    remove: (state, action) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.itemId === action.payload.itemId
      );
      if (cartItem) {
        state.cartItems = state.cartItems.filter(
          (item) => item.itemId !== cartItem.itemId
        );
        state.quantity -= cartItem.quantity;
      }
      state.total = state.cartItems.reduce(
        (total, item) => total + item.quantity * (item.itemPrice || 0),
        0
      );
      state.finalTotal = state.total + state.shippingFee;
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
      state.finalTotal = state.total + state.shippingFee;
    },
  },
});

export const { add, increase, decrease, remove, clear, addCoupon } =
  CartSlice.actions;
export default CartSlice.reducer;
