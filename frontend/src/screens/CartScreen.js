import axios from "axios";
import React, { useState, useEffect } from "react";
import CheckoutScreen from "./CheckoutScreen";

const CartScreen = (props) => {
  // get cart items from local storage
  const getCartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [cartItems, setCartItems] = useState(getCartItems);

  const id = props.match.params.id;

  // add item into cart
  const addToCart = async () => {
    const { data } = await axios.get(`/items/${id}`);
    const result = {
      id: data.id,
      img: data.img,
      name: data.name,
      price: data.price,
    };

    // setCartItems(...cartItems, [...cartItems, result]);
    setCartItems([...cartItems, result]);
  };

  useEffect(() => {
    addToCart();
  }, []);

  // cartItems store into localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return (
    <div className='row top'>
      <div className='col-2'>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? <h2> Cart is empty </h2> : <CheckoutScreen />}
      </div>
    </div>
  );
};

export default CartScreen;
