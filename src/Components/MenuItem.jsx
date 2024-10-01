import React from "react";

const MenuItem = ({item}) => {
  return (
    <div className="uppercase text-base cursor-pointer border-b font-normal border-gray-400 py-1 w-full px-4">
      {item}
    </div>
  );
};

export default MenuItem;
