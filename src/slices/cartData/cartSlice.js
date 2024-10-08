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
      const existingProduct = state.cartItems.find(
        (item) => 
          item.productId === action.payload.productId && 
          item.productSize === action.payload.productSize // Considering both size and ID
      );

      if (existingProduct) {
        existingProduct.productQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, productQuantity: 1 });
      }
    },
    decrement: (state, action) => {
      state.cartCount -= 1;
      const existingProduct = state.cartItems.find(
        (item) => 
          item.productId === action.payload.productId && 
          item.productSize === action.payload.productSize
      );

      if (existingProduct && existingProduct.productQuantity > 1) {
        existingProduct.productQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => 
            !(item.productId === action.payload.productId && 
              item.productSize === action.payload.productSize) // Removing based on both ID and size
        );
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
