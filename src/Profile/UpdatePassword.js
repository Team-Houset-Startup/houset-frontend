import React, { useState } from "react";
import { EyeIcon } from "./assets/Icon";
import "./assets/style/profile-update-password.css";

const PasswordInput = ({ placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      <EyeIcon clickFunc={showPasswordHandler} />
    </>
  );
};

export default function UpdatePassword() {
  return (
    <>
      <div className="profile-container-header password">
        <h1 className="header-title">Ubah Password</h1>
        <p className="header-text">
          Demi keamanan dan keamanan Anda, mohon untuk tidak menyebarkan
          password ke orang lain
        </p>
      </div>
      <div className="profile-container-body password">
        <div className="input-field">
          <section>
            <label>Password Sekarang</label>
            <div className="old-password">
              <span>
                <PasswordInput placeholder="Masukkan password saat ini" />
              </span>
              <button className="forget-password">Lupa Password?</button>
            </div>
          </section>
          <section>
            <label>Password Baru</label>
            <span>
              <PasswordInput placeholder="Masukkan password baru anda" />
            </span>
          </section>
          <section>
            <label>Konfirmasi Password</label>
            <span>
              <PasswordInput placeholder="Konfirmasi password baru anda" />
            </span>
          </section>
        </div>
        <div className="submit-field">
          <button type="submit">Konfirmasi</button>
        </div>
      </div>
    </>
  );
}
