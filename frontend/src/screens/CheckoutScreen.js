import React from "react";
import CartItemsScreen from "./CartItemsScreen";

const CheckoutScreen = () => {
  return (
    <div className='row top'>
      <div className='col-2'>
        <CartItemsScreen />
      </div>
    </div>
  );
};

export default CheckoutScreen;
