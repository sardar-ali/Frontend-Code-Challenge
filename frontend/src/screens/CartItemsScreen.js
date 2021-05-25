import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CartItemsScreen = () => {
  //get cart item from local storage
  const getCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  // remove item from cart
  const removeFromCartHandler = (id) => {
    const cartItems = getCartItems.filter((item) => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <Fragment>
      {getCartItems.length === 0 ? (
        <h1>Shopping cart is empty</h1>
      ) : (
        <ul>
          {getCartItems.map((item) => (
            <li key={item.id}>
              <div className='row'>
                <div>
                  <img src={item.img} alt={item.name} className='small'></img>
                </div>
                <div className='min-30'>
                  <Link to={`/items/${item.id}`}>{item.name}</Link>
                </div>
                <div>${item.price}</div>
                <div>
                  <a href='/checkout'>
                    <button
                      type='button'
                      onClick={() => removeFromCartHandler(item.id)}>
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default CartItemsScreen;
