import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavbarLoginRegister from '../parts/NavbarLoginRegister';
import AlternateLogin from '../parts/AlternateLogin';

import "../assets/style/login-register.css"
import "../assets/style/register.css";
import "../assets/style/login.css";


function Register(props) {
    return (
        <div className='login-register-body'>
            <NavbarLoginRegister />
            <div class="container-form">
                <h2 class="header-form"> Register </h2>
                <form>
                    <label class="text-label" for="email"> Nama </label> <br />
                    <input class="box-input" type="text" name="email" placeholder="Masukkan nama lengkap anda" /> <br />
                    <label class="text-label" for="email"> Email </label> <br />
                    <input class="box-input" type="text" name="email" placeholder="Masukkan alamat email anda" /> <br />
                    <label class="text-label" for="password"> Password </label> <br />
                    <input class="box-input" type="password" name="password" placeholder="Masukkan password anda" /> <br />
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