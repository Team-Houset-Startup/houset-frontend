import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from '../scenes/Login';
import Furniture from '../scenes/Furniture';
import Kanvas from '../scenes/Kanvas';
import Ruangan from '../scenes/Ruangan';
import Penawaran from '../scenes/Penawaran';

function MenuOption(props) {
    var path = '../scenes/' + props.pathname;
    let navigate = useNavigate();

    function handleNavigate() {
        navigate(props.pathname);
    }

    return(
        <>
            {/* <Link to={props.pathname}> {props.feature} </Link> */}
            <button type="button" onClick={handleNavigate}> {props.feature} </button>
        </>
    );
}

export default MenuOption;