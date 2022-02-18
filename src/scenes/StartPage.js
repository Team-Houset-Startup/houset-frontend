import React from 'react'

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import NavigationBar from './parts/NavigationBar';
import Homepage from './Homepage';
import Register from './Register';
import Login from './Login';
import Furniture from './Furniture';
import Ruangan from './Ruangan';
import Kanvas from './Kanvas';
import Penawaran from './Penawaran';

import useToken from '../context/useToken';

export default function StartPage(params) {
    const { token, setToken } = useToken()

    if (!token) {
        return (

            <div className='homepage-body'>
                <Router>

                    <Link to="/"> </Link>

                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login setToken={setToken} />} />
                    </Routes>

                    <Routes>
                        <Route path="/furnitur/" element={<Furniture />} />
                        <Route path="/ruangan" element={<Ruangan />} />
                        <Route path="/kanvas" element={<Kanvas />} />
                        <Route path="/penawaran" element={<Penawaran />} />
                    </Routes>
                </Router>
            </div>
        );
    }

    return (
        <h1> Logged In </h1>
    )
}
