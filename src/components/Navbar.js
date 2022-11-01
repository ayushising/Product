import React from "react";
import "./Navbar.css";
import Profile from "../icons/profile.svg";
import search from "../icons/search.svg";
import cart from "../icons/cart.svg";
import heart from "../icons/heart.svg";

import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartCount);
  console.log(cartCount);
  return (
    <div className="nav">
      <div className="title"> AccioJob</div>

      <div className="icons">
        <p className="link"> Home</p>
        <p className="link"> Shop</p>
        <p className="link"> About</p>
        <p className="link"> Blog</p>
        <p className="link"> Contact</p>
        <p className="link"> Pages</p>
      </div>

      <div className="side">
        <div className="login">
          <img src={Profile} alt="" />
          <p className="log"> Login / Register</p>
        </div>
        <div>
          <img src={search} alt="" />
        </div>
        <div className="cart">
          <img src={cart} alt="" />
          <p className="para">{cartCount > 0 ? cartCount : "0"} </p>
        </div>
        <div className="heart">
          <img src={heart} alt="" />
          <p className="para">1</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
