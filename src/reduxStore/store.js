import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productsData/productsSlice";
import searchBarReducer from "../slices/searchBar/searchBarSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    searchBar: searchBarReducer,
  },
});
