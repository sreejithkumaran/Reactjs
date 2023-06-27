import React from "react";
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Router/Home';
import About from './Component/Router/About';
import { Navbar } from './Component/Router/Navbar';
import { OrderSummary } from "./Component/Router/OrderSummary";
import { NoMatch } from "./Component/Router/NoMatch";
import { Product } from "./Component/Router/Product";
import { FeaturedProduct } from "./Component/Router/FeaturedProduct";
import { NewProduct } from "./Component/Router/NewProduct";
import { Users } from "./Component/Router/Users";
import { UserDetails } from "./Component/Router/UserDetails";
import { Admin } from "./Component/Router/Admin";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='orderSummary' element={<OrderSummary />}></Route>
      <Route path='products' element={<Product />}>
        <Route index element={<FeaturedProduct />}/>
        <Route path='featured' element={<FeaturedProduct />}></Route>
        <Route path='new' element={<NewProduct />}></Route>
      </Route>
      {/* <Route path='users' element={<Users />}></Route>
      <Route path='users/:userId' element={<UserDetails />}> </Route>
      <Route path='users/admin' element={<Admin />}> </Route> */}
      <Route path='users' element={<Users />}>
        <Route path=':userId' element={<UserDetails />}> </Route>
        <Route path='admin' element={<Admin />}> </Route>
      </Route>
      {/* <Route path='users/1' element={<UserDetails />}> </Route>
      <Route path='users/2' element={<UserDetails />}> </Route> 
      <Route path='users/3' element={<UserDetails />}> </Route> */}
      <Route path='*' element={<NoMatch />}></Route>
     
    </Routes>
    </>
  );
}

export default App;
