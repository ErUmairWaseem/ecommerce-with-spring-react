import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5-rem] h-[5-rem] lg:w-[9-rem] lg:h-[9-rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/224/224/xif0q/t-shirt/2/v/v/xl-aopleaffull-drgreen-urbano-fashion-original-imafvzqqbfbfvprv-bb.jpeg?q=90"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Men Printed Round Neck Pure Cotton Dark Green T-Shirt
          </p>
          <p className="opacity-70">Size: L, Grey</p>
          <p className="opacity-70 mt-2">Seller:Urbano Fashion </p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹999 </p>
            <p className="opacity-50 line-through">₹3,999</p>
            <p className="text-green-600 font-semibold">75% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded sm">2</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
