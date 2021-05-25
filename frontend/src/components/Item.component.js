import React from "react";
import { Link } from "react-router-dom";

//single item details
const Item = ({ item }) => {
  return (
    <div className='card' key={item.id}>
      <Link to={`/items/${item.id}`}>
        <img
          className='medium'
          src={item.img}
          alt={item.name}
          width='250px'
          height='300px'
        />
      </Link>
      <div className='card-body'>
        <Link to={`/items/${item.id}`}>
          <h2>{item.name}</h2>
        </Link>
        <div className='price'>${item.price}</div>
      </div>
    </div>
  );
};

export default Item;
