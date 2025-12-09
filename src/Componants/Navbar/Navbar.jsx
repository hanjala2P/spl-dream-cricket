import React from "react";
import navLogo from "../../assets/logo.png";
import coin from "../../assets/dollar 1.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="w-[60px] h-[60px] ">
          <img src={navLogo} alt=" Brand Logo" />
        </a>
      </div>
      <div className="flex item-center">
        <span className="text-xl mr-1">{availableBalance}</span>
        <span className="text-xl mr-1">Coin</span>
        <img src={coin} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
