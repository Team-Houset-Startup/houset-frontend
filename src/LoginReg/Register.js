import React from 'react'
import { useRef, useState, useEffect, useContext } from "react";
import axios from "../api/axios"
import { Link, useNavigate } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin';

import "./assets/style/login-register.css"
import "./assets/style/register.css";
import "./assets/style/login.css";

const EMAIL_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export default function Register() {
    const navigate = useNavigate('');

    const userRef = useRef();
    const errRef = useRef();
    const [userFocus, setUserFocus] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [validEmail, setValidEmail] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword]);

    useEffect(() => {
        setErrMsg("");
    }, [email, password, matchPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // REGEX check
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);
        if (!v1 || !v2) {
            // setErrMsg("Invalid Entry");
            // return;
        }

        // check length
        if (password.length < 8) {
            setErrMsg("Password must at least 8 character");
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            setSuccess(true);
            //clear state
            setEmail("");
            setPassword("");
            setMatchPassword("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    };

    if (success) {
        navigate('/login');
        alert("succeeded");
        setSuccess(false);
    } else {
        return (
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
                    <h2 className="header-form"> Register </h2>
                    <form onSubmit={handleSubmit}>
                        <label className="text-label" htmlFor="email"> Nama </label> <br />
                        <input className="box-input"
                            type="text"
                            name="name"
                            ref={userRef}
                            placeholder="Masukkan nama lengkap anda"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                        // onFocus={() => setUserFocus(true)}
                        // onBlur={() => setUserFocus(false)}
                        />
                        <br />
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
                        <div className="agreement-box">
                            <input className="bottom-info" type="checkbox" /> Saya setuju dengan <strong> syarat & ketentuan </strong>
                            serta <strong>Kebijakan Privasi</strong> di Houset <br />
                        </div>
                        <button type="submit"> Register </button>

                        <div className="login-option">
                            {/* <AlternateLogin /> */}
                        </div>

                        <div className="form-footer">
                            <p className="switch-method"> Sudah punya akun? <Link to="/login"> Masuk </Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
