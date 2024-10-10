import React from "react";
import { useSelector, useDispatch } from "react-redux";
import bin_icon from "../../assets/frontend_assets/bin_icon.png";
import { decrement, increment, removeFromCart } from "../../slices/cartData/cartSlice";

const ProductsInsideCart = ({ item, index }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

  const handleRemoveProduct = (data) => {
    dispatch(removeFromCart(data));
  };

  const handleDecreaseCount = (data) => {
    dispatch(decrement(data));
  };

  const handleIncreaseCount = (data) => {
    dispatch(increment(data));
  };

  return (
    <div className="flex justify-between mt-8 border border-gray-300 rounded-xl overflow-hidden px-8 items-center">
      <div className="flex gap-5 py-3">
        <div>
          <img src={item.productImage} className="w-20" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">{item.productTitle}</h1>
          <div className="flex gap-4 ">
            <p className="font-semibold">${item.productPrice}</p>
            <p className=" border border-gray-300 px-2">{item.productSize}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <span
          className="text-xl border border-black rounded-md px-2 cursor-pointer"
          onClick={() => handleDecreaseCount(item)}
          id={index}
        >
          -
        </span>
        <span className="text-lg font-semibold">{item.productQuantity}</span>
        <span
          className="text-xl border px-2 rounded-md border-black cursor-pointer"
          onClick={() => handleIncreaseCount(item)}
        >
          +
        </span>
      </div>
      <div>
        <img
          id={index}
          src={bin_icon}
          onClick={() => handleRemoveProduct(item)}
          className="w-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductsInsideCart;
