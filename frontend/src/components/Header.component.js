import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //getItems from localStorage
  const getCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  return (
    <header className='row'>
      <div>
        <Link className='brand' to='/'>
          ProductBox
        </Link>
      </div>

      <div>
        <Link to='/checkout'>
          cart Items
          <span className='badge'>{getCartItems.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
