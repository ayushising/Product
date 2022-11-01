import React from "react";
// import ReactStars from "react-rating-stars-component";

import { useDispatch } from "react-redux";

import "./ProductCard.css";

const ProductCard = ({ id, image, name, oldPrice, newPrice }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="product-name">{name}</div>
      <div className="price">
        <div className="star">
          {/* <ReactStars
            count={2}
            size={14}
            color="#ffd700"
            //   activeColor="#ffd700"
          /> */}
          <h1>*****</h1>
        </div>
        <h5 className="old">{oldPrice}/-</h5>
        <h2>{newPrice}/-</h2>
      </div>
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_CART_COUNT" });
        }}
        className="add-to-cart"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
