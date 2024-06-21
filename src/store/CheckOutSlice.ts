// src/store/CheckOutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const checkOutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = checkOutSlice.actions;
export default checkOutSlice.reducer;
