import React from 'react';
import { useRef, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
// import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin'

import "./assets/style/login-register.css"
import "./assets/style/login.css";

async function doLogin(credentials) {
    return fetch('https://reqres.in/api/login', {
        // mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken }) {
    const navigate = useNavigate();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            const token = await doLogin({
                email,
                password
            });
            // console log status
            console.log(token)
            setToken(token);
            // navigate('/');
        } catch (err) {
            console.log(err.response?.status);
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 400) {
                setErrMsg("Missing Email or Password");
            } else if (err.response?.status === 401) {
                setErrMsg("Unauthorized");
            } else {
                setErrMsg("Login Failed");
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='login-register-body'>
            <NavbarLoginRegister />
            <div className="container-form">
                <h2 className="header-form"> Login </h2>
                <form onSubmit={handleSubmit}>

                    <label className="text-label" htmlFor="email"> Email </label> <br />
                    <input className="box-input"
                        type="text"
                        name="email"
                        placeholder="Masukkan alamat email anda"
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <br />

                    <label className="text-label" htmlFor="password"> Password </label> <br />
                    <input className="box-input"
                        type="password"
                        name="password"
                        placeholder="Masukkan password anda"
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="on"
                        required />
                    <br />

                    <p>
                        <input type="checkbox" /> Ingat saya
                        <Link className="forget-pass" to=""> Lupa password? </Link>
                    </p>

                    <button type="submit"> Masuk </button>

                    <div className="login-option">
                        <AlternateLogin />
                    </div>

                    <div className="form-footer">
                        <p className="switch-method"> Belum punya akun? <Link to="/register"> Register </Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}