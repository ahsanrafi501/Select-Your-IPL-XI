import React from "react";
import navImg from '../../assets/logo.png'
import currency from '../../assets/Currency.png'

const Navbar = ({totalBalance}) => {
  return (
    <div>
      <div className="navbar md:px-[140px]">
        <div className="flex-1">
          <a className="text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-1">
          <span>{totalBalance}</span>
          <span>Coin</span>
          <img src={currency} alt="" />
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
