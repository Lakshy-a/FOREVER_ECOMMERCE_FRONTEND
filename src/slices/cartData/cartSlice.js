import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cartCount += 1;
      state.cartItems.push(action.payload);
    },
    decrement: (state, action) => {
      state.cartCount -= 1;
      state.cartItems.splice(action.payload, 1);
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
