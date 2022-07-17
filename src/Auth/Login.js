import React from 'react';
import { useRef, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
// import axios from 'axios';
import axios from '../api/axios';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin'
import useAuth from '../hooks/useAuth';

import "./assets/style/auth.scss"
import "./assets/style/login.css";

const LOGIN_URL = '/user/login';

export default function Login() {
    const { setAuth } = useAuth();

    // this will navigate back to homepage after login success
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [alertWarning, setAlertWarning] = useState(false);
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setErrMsg("Password length at least 8 character")
        } else {
            try {

                const response = await axios.post(
                    LOGIN_URL,
                    JSON.stringify({ email, password }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: false,
                    },
                )
                const accessToken = response?.data?.accessToken;
                setAuth({ email, password, accessToken });
                localStorage.setItem('token', accessToken);
                // setToken(accessToken);
                // console.log(accessToken);
                setEmail("");
                setPassword("");
                navigate('/');
            } catch (err) {
                if (!err?.response) {
                    setErrMsg("No Server Response");
                } else if (err.response?.status === 400) {
                    setErrMsg("Wrong Email or Password");
                } else if (err.response?.status === 401) {
                    setErrMsg("Unauthorized");
                } else {
                    setErrMsg("Login Failed");
                }
                errRef.current.focus();
            }
        }
    }
    return (
        <>
            <div className='login-register-body'>
                <NavbarLoginRegister />
                <div className="container-form">
                    <p
                        ref={errRef}
                        className={errMsg ? "login-alert-errMsg" : "login-alert-offScreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>

                    <h2 className="header-form"> Login </h2>

                    <form onSubmit={handleSubmit}>
                        <label className="text-label" htmlFor="email"> Email </label> <br />
                        <input className="box-input"
                            type="email"
                            name="email"
                            ref={userRef}
                            autoComplete="off"
                            placeholder="Masukkan alamat email anda"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <br />

                        <label className="text-label" htmlFor="password"> Password </label> <br />
                        <input className="box-input"
                            type="password"
                            name="password"
                            ref={userRef}
                            placeholder="Masukkan password anda"
                            onChange={e => setPassword(e.target.value)}
                            // value={password}
                            autoComplete="on"
                            required
                        />
                        <br />

                        <p>
                            <input type="checkbox" /> Ingat saya
                            <Link className="forget-pass" to="/forget-password" > Lupa password? </Link>
                        </p>

                        <button type="submit"> Masuk </button>

                        <div className="login-option">
                            {/* <AlternateLogin /> */}
                        </div>

                        <div className="form-footer">
                            <p className="switch-method"> Belum punya akun? <Link to="/register"> Register </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}