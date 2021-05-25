import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.component";
import HomeScreen from "./screens/HomeScreen";
import "./index.css";
import ItemDetailsScreen from "./screens/ItemDetailsScreen";
import CartScreen from "./screens/CartScreen";
import AddNewItemScreen from "./screens/AddNewItemScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

const App = () => {
  return (
    <Router>
      <div className='grid-container'>
        <Header />
        <main>
          <Route path='/checkout' component={CheckoutScreen}></Route>
          <Route path='/addNewItem' component={AddNewItemScreen}></Route>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path='/items/:id' component={ItemDetailsScreen}></Route>
          <Route exact path='/' component={HomeScreen}></Route>
        </main>
        <footer className='row center'>All right reserved</footer>
      </div>
    </Router>
  );
};

export default App;
