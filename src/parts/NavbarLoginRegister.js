import React from 'react';
import LogoHouset from "../assets/image/houset-logo2.png";
import { Link } from 'react-router-dom';

function NavbarLoginRegister() {
    return (
        <nav>
            <Link to='/'> <img src={LogoHouset} className="logo-houset" /> </Link>
        </nav>
    )
}

export default NavbarLoginRegister;