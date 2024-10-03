import React from "react";
import cross_icon from "../assets/frontend_assets/cross_icon.png";
import search_icon from "../assets/frontend_assets/search_icon.png";
import { useDispatch } from "react-redux";
import { closeSearchBar } from "../slices/searchBar/searchBarSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleCloseSearchBar = () => {
    dispatch(closeSearchBar());
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex border justify-between items-center border-gray-500 rounded-full px-4 py-2 w-64 xs:w-[500px]">
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-sm w-full "
        />
        <div className="w-4">
          <img src={search_icon} alt="search_icon" className="w-4 h-4" />
        </div>
      </div>
      <div className="">
        <img
          className="w-3"
          src={cross_icon}
          alt="cross_icon"
          onClick={handleCloseSearchBar}
        />
      </div>
    </div>
  );
};

export default SearchBar;
