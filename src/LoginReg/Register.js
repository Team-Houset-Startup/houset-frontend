import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLoginRegister from './NavbarLoginRegister';
import AlternateLogin from './AlternateLogin';

import "./assets/style/login-register.css"
import "./assets/style/register.css";
import "./assets/style/login.css";

async function doRegister(credentials) {
    return fetch('https://localhost:9090/api/v1/houset/auth/register', {
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
    const validatePassword = (password) => {
        if (password.length < 8) {
            setError("Password minimal 8 karakter");
            return false;
        } else {
            setPassword(password);
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
            alert("Password harus 8-16 karakter");
        }
    }



    return (
        <div className='login-register-body'>
            <NavbarLoginRegister />
            <div class="container-form">
                <h2 class="header-form"> Register </h2>
                <form onSubmit={handleSubmit}>
                    <label class="text-label" for="email"> Nama </label> <br />
                    <input class="box-input" type="text" name="email" placeholder="Masukkan nama lengkap anda" onChange={e => setNama(e.target.value)} required /> <br />
                    <label class="text-label" for="email"> Email </label> <br />
                    <input class="box-input" type="text" name="email" placeholder="Masukkan alamat email anda" onChange={e => setEmail(e.target.value)} required /> <br />
                    <label class="text-label" for="password"> Password </label> <br />
                    <input class="box-input" type="password" name="password" placeholder="Masukkan password anda" onChange={validatePassword} required /> <br />
                    <div class="agreement-box">
                        <input class="bottom-info" type="checkbox" /> Saya setuju dengan <strong> syarat & ketentuan </strong>
                        serta <strong>Kebijakan Privasi</strong> di Houset <br />
                    </div>
                    <button type="submit"> Register </button>

                    <div className="login-option">
                        <AlternateLogin />
                    </div>

                    <div class="form-footer">
                        <p class="switch-method"> Sudah punya akun? <Link to="/login"> Masuk </Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;