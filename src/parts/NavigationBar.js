import React from 'react';
import { Link } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";

import "../assets/style/navigation-bar.css";

function NavigationBar() {

    return (
        <nav className="navbar-nav">
            <div className="navbar-div">
                <Link to="/"> <img src={HousetLogo} className="houset-logo" alt="image not found" /> </Link>
                <ul className="navbar-ul">
                    <li> <Link to="/furnitur"> Furniture </Link> </li>
                    <li> <Link to="/ruangan"> Ruangan </Link> </li>
                    {/* <li> <Link to="/kanvas"> Kanvas Desain </Link> </li> */}
                    <li> <Link to="/penawaran"> Penawaran </Link> </li>
                </ul>
            </div>
            <div className="login-register">
                <Link to="/register"> <button className="register-button"> Register </button> </Link>
                <Link to="/login"> <button className="login-button"> Login </button> </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;