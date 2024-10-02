import React from "react";

const Filters = ({ item }) => {
  return (
    <div className="border border-gray-400 pl-6 pr-6 xs:pr-28 py-3 mt-8">
      <h1 className="uppercase text-sm font-semibold">{item.filterName}</h1>
      <ul className="text-sm mt-4 text-gray-600">
        {item.filterValues.map((value, index) => (
          <li key={index} className="mt-3 flex ">
            <input type="checkbox" value={value} id={value} />
            <label className="ml-3 font-semilight" htmlFor={value}>
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
