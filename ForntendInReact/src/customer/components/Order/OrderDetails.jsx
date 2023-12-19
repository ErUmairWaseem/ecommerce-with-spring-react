import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5-rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/100/100/xif0q/t-shirt/2/v/v/xl-aopleaffull-drgreen-urbano-fashion-original-imafvzqqbfbfvprv-bb.jpeg?q=90"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold">
                    Men Printed Round Neck Pure Cotton Dark Green T-Shirt
                  </p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : Green</span> <span>Size : M</span>
                  </p>
                  <p>Seller : Urbano Fashion</p>
                  <p>₹328</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
