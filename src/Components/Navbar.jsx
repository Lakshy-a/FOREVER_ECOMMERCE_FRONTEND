import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import logo from "../assets/frontend_assets/logo.png";
import cart_icon from "../assets/frontend_assets/cart_icon.png";
import search_icon from "../assets/frontend_assets/search_icon.png";
import profile_icon from "../assets/frontend_assets/profile_icon.png";
import menu_icon from "../assets/frontend_assets/menu_icon.png";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = ["Home", "Collection", "About", "Contact", "Admin Panel"];

  return (
    <nav className="w-full fit py-4 flex justify-between relative z-10 custom-padding">
      <NavLink to="/">
        <div>
          <img src={logo} className="w-36 cursor-pointer" alt="logo" />
        </div>
      </NavLink>
      <div className="hidden xs:flex items-center gap-6">
        <NavLink to="/">
          <div className="uppercase text-sm font-semibold text-gray-700 cursor-pointer">
            Home
          </div>
        </NavLink>
        <div className="uppercase text-sm font-semibold text-gray-700 cursor-pointer">
          Collection
        </div>
        <NavLink to="/about">
          <div className="uppercase text-sm font-semibold text-gray-700 cursor-pointer">
            About
          </div>
        </NavLink>
        <NavLink to="contact">
          <div className="uppercase text-sm font-semibold text-gray-700 cursor-pointer">
            Contact
          </div>
        </NavLink>
        <div className="uppercase text-xs border border-black px-3 py-1 rounded-full font-semibold text-gray-700 cursor-pointer">
          Admin Panel
        </div>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div>
          <img src={search_icon} className="w-5 cursor-pointer" alt="search" />
        </div>
        <div>
          <img
            src={profile_icon}
            className="w-5 cursor-pointer"
            alt="profile"
          />
        </div>
        <div className="relative">
          <img src={cart_icon} className="w-5 cursor-pointer" alt="cart" />
          <div className="absolute top-3 left-3 bg-black rounded-full px-1 text-xs text-white font-semibold">
            0
          </div>
        </div>
        <div className="cursor-pointer">
          <img
            src={menu_icon}
            className="xs:hidden w-5 cursor-pointer"
            onClick={handleNavOpen}
            alt="menu"
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } fixed w-full h-screen bg-white z-10 duration-500 `}
      >
        <div
          className="cursor-pointer  flex gap-2 items-center"
          onClick={handleNavOpen}
        >
          <span className="text-xl text-gray-500">
            <IoIosArrowBack />
          </span>
          <div className="text-gray-500 text-lg font-semibold">Back</div>
        </div>
        <div className="flex flex-col items-start gap-2 mt-4 ">
          {menuItems.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
