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


// import Home from '/Home';
import useToken from '../context/useToken';

export default function StartPage(params) {
    const { token, setToken } = useToken()
    // console.log(token);

    if (!token) {
        return (

            <div className='homepage-body'>
                {/* <h1> Welcome {user.name} </h1> */}
                <Router>

                    <Link to="/"> </Link>

                    <Routes>
                        {/* <Route path="/home" element={<Home />} /> */}
                        <Route path="/" element={<Homepage />} />
                        {/* <Route path="/" element={<Section1 />} /> */}
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
