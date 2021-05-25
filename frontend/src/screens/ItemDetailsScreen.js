import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemDetailsScreen = (props) => {
  const [item, setItem] = useState({});

  //get item id from url
  const itemId = props.match.params.id;

  // Get single item
  const getItemDetails = async () => {
    try {
      const { data } = await axios.get(`/items/${itemId}`);
      setItem(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getItemDetails();
  }, []);

  // Item add into cart
  const addToCartHandler = () => {
    props.history.push(`/cart/${itemId}`);
  };

  if (!item) {
    return <div>item Not Found</div>;
  }
  return (
    <div>
      {item && (
        <div>
          <Link to='/'> Back To Result</Link>
          <div className='row top'>
            <div className='col-2'>
              <img className='large' src={`../${item.img}`} alt={item.name} />
            </div>
            <div className='col-1'>
              <ul>
                <h1>{item.name} </h1>
                <li>Price : ${item.price}</li>
              </ul>
            </div>
            <div className='col-1'>
              <div className='card card-body'>
                <ul>
                  <li>
                    <div className='row'>
                      <div> Price</div>
                      <div className='price'>${item.price}</div>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={addToCartHandler}
                      className='primary block'>
                      Add To Cart
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailsScreen;
