import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ Product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20-rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={Product.imageUrl}
          alt="Not Found"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{Product.brand} </p>
          <p>{Product.title}</p>
        </div>
        <div className=" flex items-center space-x-2">
          <p className="font-semibold">₹{Product.discountedPrice}</p>
          <p className="line-through opacity-50">{Product.price}</p>
          <p className="text-green-600 font-semibold">
            {Product.discountPrecent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
