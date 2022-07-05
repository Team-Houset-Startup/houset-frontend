import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin';

import "./assets/style/login-register.css"
import "./assets/style/register.css";
import "./assets/style/login.css";

async function doRegister(credentials) {
    return fetch('api/v1/houset/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Register(props) {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    // validate password 
    function validatePassword(password) {
        if (password.length < 8) {
            // setError("Password minimal 8 karakter");
            return false;
        } else {
            return true;
        }
    }

    // register user
    const handleSubmit = async e => {
        console.log(password.length);
        e.preventDefault();
        if (validatePassword(password)) {
            const token = await doRegister({
                nama,
                email,
                password
            });
            alert("Register berhasil, silahkan login");
        } else {
            alert("Password minimal 8 karakter");
        }
    }

    return (
        <div className='login-register-body'>
            <NavbarLoginRegister />
            <div className="container-form">
                <h2 className="header-form"> Register </h2>
                <form onSubmit={handleSubmit}>
                    <label className="text-label" for="email"> Nama </label> <br />
                    <input className="box-input" 
                        type="text" name="email" 
                        placeholder="Masukkan nama lengkap anda" 
                        onChange={e => setNama(e.target.value)} 
                        required /> 
                    <br />
                    <label className="text-label" for="email"> Email </label> <br />
                    <input className="box-input" 
                        type="text" name="email" 
                        placeholder="Masukkan alamat email anda"
                        onChange={e => setEmail(e.target.value)} 
                        required /> 
                    <br />
                    <label className="text-label" for="password"> Password </label> <br />
                    <input className="box-input" 
                        type="password" name="password" 
                        placeholder="Masukkan password anda" 
                        onChange={e => setPassword(e.target.value)} 
                        required /> 
                    <br />
                    <div className="agreement-box">
                        <input className="bottom-info" type="checkbox" /> Saya setuju dengan <strong> syarat & ketentuan </strong>
                        serta <strong>Kebijakan Privasi</strong> di Houset <br />
                    </div>
                    <button type="submit"> Register </button>

                    <div className="login-option">
                        <AlternateLogin />
                    </div>

                    <div className="form-footer">
                        <p className="switch-method"> Sudah punya akun? <Link to="/login"> Masuk </Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;