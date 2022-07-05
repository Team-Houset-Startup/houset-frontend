import React from 'react';
import { useRef, useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
// import axios from 'axios';
import axios from '../api/axios';

import { Link, useNavigate } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin'
import AuthContext from '../context/AuthProvider';

import "./assets/style/login-register.css"
import "./assets/style/login.css";

const LOGIN_URL = '/login';


// async function doLogin(credentials) {
//     return fetch('https://reqres.in/api/login', {
//         // mode: 'no-cors',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//         .then(data => data.json())
// }

export default function Login() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
        // setAlertWarning(false);
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const token = await doLogin({
            //     email,
            //     password
            // });
            // setToken(token);

            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                },
            )
            const accessToken = response?.data?.accessToken;
            setAuth({ email, password, accessToken });
            setEmail("");
            setPassword("");
            setSuccess(true);
        } catch (err) {
            // console.log(err.response?.status);
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
        <>
            {success ? navigate('/') : (
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
                                placeholder="Masukkan password anda"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                autoComplete="on"
                                required 
                            />
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
            )}
        </>
    )
}
