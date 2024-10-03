import React, { useState } from "react";
import SubscribeNow from "./SubscribeNow";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
import { GoHorizontalRule } from "react-icons/go";
import dropdown_icon from "../assets/frontend_assets/dropdown_icon.png";
import { FaChevronRight } from "react-icons/fa6";

import { useSelector } from "react-redux";

const filtersData = [
  {
    filterName: "categories",
    filterValues: ["Men", "Women", "Kids"],
  },
  {
    filterName: "type",
    filterValues: ["Topwear", "Bottomwear", "Winterwear"],
  },
];

const CollectionPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const products = useSelector((state) => state.products.products);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="custom-padding mt-12">
      <div className="xs:flex gap-16">
        <div>
          <div
            className="text-xl font-semibold flex items-center gap-2 uppercase  mt-2"
            onClick={handleFilterClick}
          >
            <h1 className="cursor-pointer">Filters</h1>{" "}
            <div className="text-sm text-gray-400 xs:hidden">
              <FaChevronRight />
            </div>
          </div>
          <div className={`${isFilterOpen ? "block" : "hidden"} xs:block`}>
            {filtersData.map((item, index) => (
              <div key={index} className="mt-6">
                <Filters item={item} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mt-8 xs:mt-0 xs:flex justify-between items-center ">
            <div className="uppercase text-xl xs:text-2xl text-gray-400 font-semibold flex items-center justify-start">
              All <span className="text-black ml-2">Collections</span>
              <span className="text-black ml-2">
                <GoHorizontalRule />
              </span>
            </div>
            <div className="mt-8 xs:mt-0">
              <select className="border border-black py-2 px-1 outline-none">
                <option className="">Sort by: Relavent</option>
                <option className="">Sort by: Low To High</option>
                <option className="">Sort by: High To Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 ">
            {products.map((product, index) => (
              <SingleProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <SubscribeNow />
      </div>
    </div>
  );
};

export default CollectionPage;
