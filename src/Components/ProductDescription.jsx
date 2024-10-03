import React from "react";
import star_dull_icon from "../assets/frontend_assets/star_dull_icon.png";
const ProductDescription = ({ neededProduct }) => {
  return (
    <>
      <div className="flex flex-col gap-7">
        <h1 className="text-2xl font-semibold mt-4">{neededProduct.name}</h1>
        <div>
          <img src={star_dull_icon} className="w-3" />
        </div>
        <div className="text-3xl font-semibold">${neededProduct.price}</div>
        <p className="text-medium font-normal text-gray-500">
          {neededProduct.description}
        </p>
        <div>
          <h2 className="font-medium">Select Size</h2>
          <ul className="flex mt-4 gap-7">
            {neededProduct.sizes.map((size, index) => (
              <li
                key={index}
                className="border border-gray-300 px-2 py-1 cursor-pointer bg-slate-200 "
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <button className="uppercase bg-black text-white px-6 py-3 w-fit hover:text-black hover:bg-white hover:border border-black">
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductDescription;
