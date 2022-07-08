import React, { useContext, useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Register from './LoginReg/Register';
import Login from './LoginReg/Login';
import Product from './Product/Product';
import Canvas from './Canvas/Canvas';
import Consult from './Consult/Consult';
import ProductDetailed from './ProductDetailed/ProductDetailed';
import RoomDetailed from './RoomDetailed/RoomDetailed';
import Cart from './Transaction/Cart';
import Checkout from './Transaction/Checkout';
import Invoice from './Transaction/Invoice';
import Profile from './Profile/Profile';

import ScrollToTop from './Components/ScrollToTop';
import ForgetPassword from './forgetPassword/ForgetPassword';
import { ModalProvider } from "./context/modal";
import AuthContext from './context/AuthProvider';
import useToken from './context/useToken';
import GetProductDataContext from "./context/ProductAPI";
export default function App(params) {
  const { token, setToken } = useToken();
  // const { auth } = useContext(AuthContext);
  // console.log(token);
  let loginStatus = <> </>;
  let logged = false;
  if (token != undefined) {
    console.log(token);
    logged = true;
  }
  // console.log(auth)

  if (!token) {
    // console.log(Object.keys(auth).length)
    return (
      <div className="homepage-body">
        <Router>
          <ModalProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
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

              {/* <Route path="/furnitur/product-page" element={<RoomPage />} />  */}
              <Route path="/canvas" element={<Canvas />} />
              <Route path="/consult" element={<Consult />} />

              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/invoice" element={<Invoice />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/forget-password"
                element={<ForgetPassword />}
              />

            </Routes>
          </ModalProvider>
        </Router>
      </div>
    );
  }

  return (
    <div className="homepage-body">
      <Router>
        <ModalProvider>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/profile" element={<Profile />} />
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
            {/* <Route path="/profile" element={<Profile />} /> */}

          </Routes>
        </ModalProvider>
      </Router>
      {/* {loginStatus} */}
    </div>
  );
}
