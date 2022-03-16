import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import NavigationBar from './parts/NavigationBar';
import Homepage from './Homepage/Homepage';
import Register from './LoginReg/Register';
import Login from './LoginReg/Login';
import Furniture from './Product/Furniture';
import Ruangan from './Product/Ruangan';
import Kanvas from './Canvas/Kanvas';
import Penawaran from './Offer/Penawaran';
import ProductDetailed from './ProductDetailed/ProductDetailed';
import Cart from './Cart/Cart';

import useToken from './context/useToken';
import ScrollToTop from './Components/ScrollToTop';

export default function App(params) {
  const { token, setToken } = useToken()

  if (!token) {
    return (

      <div className='homepage-body'>
        <Router>
          <ScrollToTop />
          <Link to="/"> </Link>

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>

          <Routes>
            <Route path="/furnitur" element={<Furniture />} />
            <Route path="/furnitur/product-page" element={<ProductDetailed />} />

            <Route path="/ruangan" element={<Ruangan />} />
            <Route path="/ruangan/room-page" element={<ProductDetailed />} />

            {/* <Route path="/furnitur/product-page" element={<RoomPage />} /> */}
            <Route path="/kanvas" element={<Kanvas />} />
            <Route path="/penawaran" element={<Penawaran />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>

        </Router>
      </div>
    );
  }

  return (
    <h1> Logged In </h1>
  )
}
