import React, { useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavbarLoginRegister from '../parts/NavbarLoginRegister';
import AlternateLogin from '../parts/AlternateLogin'

import "../assets/style/login-register.css"
import "../assets/style/login.css";

async function doLogin(credentials) {
    return fetch('https://localhost:9090/api/v1/houset/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Login(props, setToken) {
    /* const [user, setUser] = useState({ Email: '', Username: ''});
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const handleSubmit = e => {
        e.preventDefault();
        const data = { email: user.Email, username: user.Username };
        axios.post(apiUrl, data)
        .then((result) => {
            // console.log(result.data);   // delete later
            const serializedState = JSON.stringify(result.data.userDetails);
            var temp = localStorage.setItem('LoginData', serializedState);

            const userData = result.data.userDetails;
            
            if (result.data.status == '200'){
                alert('Login Successful');          // delete later
                // props.history.push('/Homepage')
            } else {
                console.log (result.data.status);   // delete later
                alert('Invalid User');
            }
        });
    }
        
    const onChange = (e) => {
        e.persist();
        setUser({...user, [e.target.name]: e.target.value})
    } */

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await doLogin({
            email,
            password
        });
        setToken(token);
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
                        onChange={e => setEmail(e.target.value)} />
                    <br />

                    <label className="text-label" htmlFor="password"> Password </label> <br />
                    <input className="box-input"
                        type="password"
                        name="password"
                        placeholder="Masukkan password anda"
                        onChange={e => setPassword(e.target.value)}
                        autoComplete = "on" />
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
    setToken: propTypes.func.isRequired
}

export default Login;