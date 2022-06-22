import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import NavigationBar from './parts/NavigationBar';
import Homepage from './Homepage/Homepage';
import Register from './LoginReg/Register';
import Login from './LoginReg/Login';
import Product from './Product/Product';
import Canvas from './Canvas/Canvas';
import Penawaran from './Offer/Penawaran';
import ProductDetailed from './Product/ProductDetailed/ProductDetailed';
import RoomDetailed from './Product/RoomDetailed/RoomDetailed';
import Cart from './Transaction/Cart';
import Checkout from './Transaction/Checkout';
import Invoice from './Transaction/Invoice';
import useToken from './context/useToken';
import ScrollToTop from './Components/ScrollToTop';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import Profile from './Profile/Profile';


export default function App(params) {
  const { token, setToken } = useToken();
  let loginStatus = (<> </>)

  // if (!token) {
  //   loginStatus = (
  //     <Router>
  //       <Routes>
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/login" element={<Login setToken={setToken} />} />
  //       </Routes>
  //     </Router>
  //   )
  // } else {
  //   loginStatus = (
  //     <Router>
  //       <Routes>
  //         <Route path="/profile" element={<Register />} />
  //       </Routes>
  //     </Router>
  //   )
  // } 

  if (!token) {
    return (

      <div className='homepage-body'>
        <Router>
          <ScrollToTop />
          {/* <NavigationBar /> */}

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>

          <Routes>
            <Route path="/product" element={<Product variant="furniture" />} />
            <Route path="/product/product-page" element={<ProductDetailed />} />
            <Route path="/product/room-page" element={<RoomDetailed />} />

            <Route path="/ruangan" element={<Product variant="room" />} />

            {/* <Route path="/furnitur/product-page" element={<RoomPage />} />  */}
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/penawaran" element={<Penawaran />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/invoice" element={<Invoice />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
        {/* {loginStatus} */}
      </div>
    );
  }

  return (
    <div className='homepage-body'>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Canvas />} />
          {/* <Route path="/profile" /> */}
        </Routes>

        <Routes>
          <Route path="/product" element={<Product variant="furniture" />} />
          <Route path="/product/product-page" element={<ProductDetailed />} />
          <Route path="/product/room-page" element={<RoomDetailed />} />

          <Route path="/ruangan" element={<Product variant="room" />} />

          {/* <Route path="/furnitur/product-page" element={<RoomPage />} /> */}
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/penawaran" element={<Penawaran />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Router> 
      {/* {loginStatus} */}
    </div>
  )
}
