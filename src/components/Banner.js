import React from "react";
import "./Banner.css";
import pic from "../icons/pic.svg";

const Banner = () => {
  return (
    <div className="ban">
      <div className="left">
        <h5 className="h5c">SUMMER 2020</h5>
        <h1 className="h1c">NEW COLLECTION</h1>
        <h4 className="h4c">
          We know how large object will act<br></br>but things on small scale
        </h4>

        <button className="buttonc">SHOP NOW</button>
      </div>

      <div>
        <img className="imgc" src={pic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
