import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../slices/cartData/cartSlice";
import ProductsInsideCart from "./ProductsInsideCart";

const CartProducts = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartCount);

  const dispatch = useDispatch();

  const handleDecreaseCount = () => {
    dispatch(decrement());
  };

  const handleIncreaseCount = () => {
    dispatch(increment());
  };

  return (
    <>
      <div className="">
        {
          cartItems.map(
            (item, index) => <ProductsInsideCart index={index} key={index} item={item}/>
          )
        }
      </div>
    </>
  );
};

export default CartProducts;
