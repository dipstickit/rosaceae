import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
  customerId: number | null;
}

const initialState: CustomerState = {
  customerId: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerId(state, action: PayloadAction<number>) {
      state.customerId = action.payload;
    },
  },
});

export const { setCustomerId } = customerSlice.actions;

export default customerSlice.reducer;
