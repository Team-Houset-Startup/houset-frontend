import React, { useContext, useEffect, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Product from './Product/Product';
import Canvas from './Canvas/Canvas';
import Consult from './Consult/Consult';
import ProductDetailed from './ProductDetailed/ProductDetailed';
import RoomDetailed from './RoomDetailed/RoomDetailed';
import Cart from './Transaction/Cart';
import Checkout from './Transaction/Checkout';
import Invoice from './Transaction/Invoice';
import Profile from './Profile/Profile';
import Error from './Error/Error'
import ForgetPassword from './forgetPassword/ForgetPassword';

import ScrollToTop from './Components/ScrollToTop';
import { ModalProvider } from "./context/modal";
import GetProductDataContext from "./context/ProductAPI";

export default function App(params) {
  // const { token, setToken } = useToken();
  const token = localStorage.getItem('token')

  return (
    <div className="homepage-body">
        {token != undefined ? (
          <Router>
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        ) : (
          <Router>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        )
      }
      <Router>
        <ModalProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>

          <Routes>
            <Route
              path="/product"
              element={<Product variant="furniture" />}
            />
            <Route
              path="/product/:productId"
              element={<ProductDetailed />}
            />
            <Route
              path="/product/room-page"
              element={<RoomDetailed />}
            />

            <Route
              path="/ruangan"
              element={<Product variant="room" />}
            />

            {/* <Route path="/furnitur/product-page" element={<RoomPage />} /> */}
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/consult" element={<Consult />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/invoice" element={<Invoice />} />

            {/* Check if the requested url error */}
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </ModalProvider>
      </Router>
    </div>
  )
}