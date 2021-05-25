import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../components/Item.component";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [items, setItems] = useState([]);

  // Get all items list
  const getItemList = async () => {
    try {
      const { data } = await axios.get("/items");
      setItems(data);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <div>
      <div style={{ width: " 200px", marginRight: "auto" }}>
        <Link to='/addNewItem'>
          <button className='primary block'>Add New Item</button>
        </Link>
      </div>
      <div className='row center'>
        {items && items.map((item) => <Item key={item.id} item={item}></Item>)}
      </div>
    </div>
  );
};

export default HomeScreen;
