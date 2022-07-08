import React, { useContext, useState } from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import NavigationBar from './parts/NavigationBar';
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
import Error from './Error/Error';
import Profile from './Profile/Profile';

// import useToken from './context/useToken';
import ScrollToTop from './Components/ScrollToTop';
// import NavigationBar from './Components/NavigationBar';
// import Footer from './Components/Footer';
import ForgetPassword from './forgetPassword/ForgetPassword';
import { ModalProvider } from "./context/modal";
import AuthContext from './context/AuthProvider';

export default function App(params) {
  // const { token, setToken } = useToken();
  const { auth, setAuth } = useContext(AuthContext);
  let loginStatus = <> </>;
  // console.log(auth)

  if (Object.keys(auth).length === 0) {
    // console.log(Object.keys(auth).length)
    loginStatus = (
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    )
  } else {
    loginStatus = (
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    )
  }

  return (
    <div className="homepage-body">
      <Router>
        <ModalProvider>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Homepage/>} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/profile" /> */}
          </Routes>

          <Routes>
            <Route path="/product" element={<Product variant="furniture" />} />
            <Route path="/product/product-page" element={<ProductDetailed />} />
            <Route path="/product/room-page" element={<RoomDetailed />} />

            <Route path="/ruangan" element={<Product variant="room" />} />

            {/* <Route path="/furnitur/product-page" element={<RoomPage />} /> */}
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/consult" element={<Consult />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/invoice" element={<Invoice />} />
            {/* <Route path="/profile" element={<Profile />} /> */}

            {/* Check if the requested url error */}
            <Route path='*' element={<Error />} />
          </Routes>
        </ModalProvider>
      </Router>
      {loginStatus}
    </div>
  );
}
