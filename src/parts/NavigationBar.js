import React from 'react';
import MenuList from '../elements/MenuList';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from '../scenes/Homepage';
import LogoButton from '../elements/LogoButton';
import HousetLogo from "../assets/image/houset-logo2.png";
// import MenuList from "../elements/MenuList";
import Furniture from '../scenes/Furniture';
import Ruangan from '../scenes/Ruangan';
import Kanvas from '../scenes/Kanvas';
import Penawaran from '../scenes/Penawaran';

import "../assets/style/navigation-bar.css";

function NavigationBar() {
    let navigate = useNavigate();

    function handleNavigateFurniture() {
        navigate('/furnitur');
    }
    function handleNavigateRuangan() {
        navigate('/ruangan');
    }
    function handleNavigateKanvas() {
        navigate('/kanvas');
    }
    function handleNavigatePenawaran() {
        navigate('/penawaran');
    }

    return (
        <nav className="navbar-nav">
            <Link to="/"> <img src={HousetLogo} alt="houset-logo" className="houset-logo" /> </Link>

            <div className="navbar-div">
                <ul className="navbar-ul">
                    <li> <a onClick={handleNavigateFurniture}> Furniture </a> </li>
                    <li> <a type="button" onClick={handleNavigateRuangan}> Ruangan </a> </li>
                    <li> <a type="button" onClick={handleNavigateKanvas}> Kanvas Desain </a> </li>
                    <li> <a type="button" onClick={handleNavigatePenawaran}> Penawaran </a> </li>

                    {/* <li> <MenuList feature="Furniture" pathname="furnitur" redirect="Furniture" /> </li>
                    <li> <MenuList feature="Ruangan" pathname="ruangan" redirect="Ruangan" /> </li>
                    <li> <MenuList feature="Kanvas Desain" pathname="kanvas" redirect="Kanvas" /> </li>
                    <li> <MenuList feature="Penawaran" pathname="penawaran" redirect="Penawaran" /> </li> */}
                </ul>
            </div>
            <div className="login-register">
                <Link to="/register"> <button class="register-button"> Register </button> </Link>
                <Link to="/login"> <button class="login-button"> Login </button> </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;