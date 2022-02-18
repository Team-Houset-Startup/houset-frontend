import React from 'react';
import { Link } from 'react-router-dom';
import HousetLogo from "../assets/image/houset-logo2.png";

function NavbarLoginRegister() {
    return (
        <nav>
            <Link to='/'> <img src={HousetLogo} className="logo-houset" alt="error image not found"/> </Link>
        </nav>
    )
}

export default NavbarLoginRegister;