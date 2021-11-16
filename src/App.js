import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,Switch,  Route } from "react-router-dom";
import Header from './components/Header'
import AllProducts from "./components/AllProducts";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import './App.css'
import Women from "./components/Women";
import Men from "./components/Men";
import ProductInfo from "./components/ProductInfo";
import Background from "./components/Background";
import Cart from "./components/Cart"
import Modal from "./components/Modal";
import HeaderCartButton from "./components/HeaderCartButton";


function App() {
  
  
  return (
    <div className="container">
    <div className="wrap-components">
    <Router>
    
        <Header />
        <Switch>
        <Route path='/modal'>
      <Modal />
     </Route>
<Route path='/allproducts'>
      <AllProducts />
     </Route>
     <Route path='/electronics'>
      <Electronics />
     </Route>
     <Route path='/jewelery'>
      <Jewelery />
     </Route> 
     <Route path='/women'>
      <Women />
     </Route>
     <Route path='/men'>
      <Men/>
     </Route>
     <Route path='/product-info/:id'>
      <ProductInfo/>
     </Route>
    <Route path='/cart'>
      <Cart/>
     </Route> 
      <Route path='/'>
      <Background />
     </Route>
     
  </Switch>
  
    </Router>
    </div>
     </div>
  );
}

export default App;
