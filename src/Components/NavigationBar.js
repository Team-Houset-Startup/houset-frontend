import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";
import useToken from '../context/useToken';
import Button from './Button';
import ProfilePicture from './assets/image/profile-picture.png';

import "./assets/style/navigation-bar.css";
import Search from './Search';

function NavigationBar() {
    const { token, setToken } = useToken();
    const navigate = useNavigate();
    let profile = (<> </>)

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setToken(null);
        navigate("/product");
    }

    if (!token) {
        profile = (
            <div className="navbar-login-register">
                {/* <Search placeHolder="Cari Produk"/> */}
                <Button text="Register" type="secondary-button" toPage={"/register"} />
                <Button text="Login" type="primary-button" toPage={"/login"} />
            </div>
        )
    } else {
        profile = (
            <div className="navbar-profile">
                {/* <Search placeHolder="Cari Produk"/> */}
                <button onClick={handleLogout}>
                    <img src={ProfilePicture} alt="profile-picture" className="profile-picture" />
                </button>
            </div>
        )
    }

    return (
        <nav className="navbar-nav">
            <div className="navbar-div">
                <Link to="/"> <img src={HousetLogo} className="houset-logo" alt="image not found" /> </Link>
                <ul className="navbar-ul">
                    <li> <Link to="/product"> Furniture </Link> </li>
                    <li> <Link to="/ruangan"> Ruangan </Link> </li>
                    <li> <Link to="/canvas"> Kanvas Desain </Link> </li>
                    <li> <Link to="/consult"> Jasa Konsultasi </Link> </li>
                </ul>
            </div>
            {profile}
        </nav>
    );
}

export default NavigationBar;