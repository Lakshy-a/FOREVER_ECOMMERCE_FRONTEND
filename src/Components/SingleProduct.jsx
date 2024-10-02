import React from "react";
import p_img1 from "../assets/frontend_assets/p_img1.png";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="mt-4 cursor-pointer">
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 duration-200 "
            src={product.image[0]}
          />
        </div>
        <h1 className="mt-2 text-sm font-normal">{product.name}</h1>
        <div className="mt-2 text-sm font-bold">${product.price} </div>
      </div>
    </>
  );
};

export default SingleProduct;
