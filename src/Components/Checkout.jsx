import React from "react";
import { GoHorizontalRule } from "react-icons/go";

const Checkout = () => {
  return (
    <>
      <div className="custom-padding">
      <div>
      <div className="uppercase text-2xl text-gray-400 font-semibold flex items-center mt-8">
          Delivery <span className="text-black ml-2">Information</span>
          <span className="text-black ml-2">
            <GoHorizontalRule />
          </span>
        </div>
      </div>
       <div>
         {/* Delivery form */}
         <div></div>
        
        {/* payment methods */}
        <div></div>
       </div>
      </div>
    </>
  );
};

export default Checkout;
