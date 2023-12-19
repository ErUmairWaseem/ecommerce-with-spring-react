import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummaryForm = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <hr />
      <hr />
      <hr />
      <div>
        <div className="lg:grid grid-cols-3 relative">
          <div className="col-span-2">
            {" "}
            {[1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-50 pb-4 pt-3 ml-5">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black mr-5 ml-5">
                  <span>Price</span>
                  <span>₹1291</span>
                </div>
                <div className="flex justify-between pt-3 ml-5 ">
                  <span>Discount</span>
                  <span className="text-green-600 mr-5">-₹1000</span>
                </div>
                <div className="flex justify-between pt-3 ml-5">
                  <span>Delivery Charge</span>
                  {/* <span className="opacity-50 line-through">200</span> */}
                  <span className="text-green-600 mr-5">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold ml-5">
                  <span>Total Payable</span>
                  <span className="text-green-600 mr-5">₹291</span>
                </div>
              </div>
            </div>
            <Button
              className="w-full mt-5"
              variant="contained"
              sx={{ pxx: "2.2rem", py: "0.7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryForm;
