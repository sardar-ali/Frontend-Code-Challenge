import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNewItemScreen = () => {
  // initalize state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  //add new product
  const SubmitHandler = (e) => {
    e.preventDefault();
    var addNewProduct = async () => {
      try {
        const { data } = await axios.post("/items", { name, price, img });
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    };

    addNewProduct();
  };

  return (
    <div>
      <form className='form' onSubmit={SubmitHandler}>
        <div>
          <h1>Add New Product</h1>
        </div>
        <div>
          <label htmlFor='name'>Name </label>
          <input
            type='name'
            id='name'
            placeholder='Enter name'
            required
            onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            id='price'
            placeholder='Enter price'
            required
            onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='img'>Img</label>
          <input
            type='img'
            id='img'
            placeholder='Enter img path'
            required
            onChange={(e) => setImg(e.target.value)}></input>
        </div>
        <div>
          <label />
          <button type='submit' className='primary'>
            Add New Product
          </button>
        </div>
        <div
          style={{
            backgroundColor: " #f0c040",
            width: "200px",
            textAlign: "center",
            padding: "10px",
            marginLeft: "150px",
          }}>
          <Link to='/' type='button'>
            View Items
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewItemScreen;
