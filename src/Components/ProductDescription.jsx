import React from "react";
import star_dull_icon from "../assets/frontend_assets/star_dull_icon.png";
import star_icon from "../assets/frontend_assets/star_icon.png";
import DescriptionReviews from "./DescriptionReviews";
const ProductDescription = ({ neededProduct }) => {
  return (
    <>
      <div className="flex flex-col gap-2 border-b pb-4 ">
        <h1 className="text-2xl font-semibold mt-4">{neededProduct.name}</h1>
        <div className="flex gap-2 items-center">
          <img src={star_icon} className="w-3 h-3" />
          <img src={star_icon} className="w-3 h-3" />
          <img src={star_icon} className="w-3 h-3" />
          <img src={star_icon} className="w-3 h-3" />
          <img src={star_dull_icon} className="w-3 h-3" />
          <div>(122)</div>
        </div>
        <div className="text-3xl font-semibold mt-4">
          ${neededProduct.price}
        </div>
        <p className="text-medium font-normal text-gray-500 mt-4">
          {neededProduct.description}
        </p>
        <div>
          <h2 className="font-medium mt-4">Select Size</h2>
          <ul className="flex mt-4 gap-7">
            {neededProduct.sizes.map((size, index) => (
              <li
                key={index}
                className="border border-gray-200 px-3 py-1 cursor-pointer bg-slate-200 "
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-8 uppercase bg-black text-white px-6 py-3 w-fit hover:text-black hover:bg-white hover:border border-black">
          Add To Cart
        </button>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <h2 className="mt-1">100% Original product.</h2>
        <h2 className="mt-1">Cash on delivery is available on this product.</h2>
        <h2 className="mt-1">Easy return and exchange policy within 7 days.</h2>
      </div>
    </>
  );
};

export default ProductDescription;
