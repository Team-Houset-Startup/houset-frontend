import React, { useState } from "react";
import { EyeIcon } from "./assets/Icon";
import "./assets/style/profile-update-password.css";


export default function UpdatePassword({userData,setUserData}) {
  const [changePassword,setChangePassword] = useState({oldPassword:"",newPassword:"",confirmPassword:""})

  const inputHandler = (e) => {
    setChangePassword({
      ...changePassword,
      [e.target.name] : e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (changePassword.oldPassword === userData.password) {
      if (changePassword.newPassword === changePassword.confirmPassword) {
        setUserData({...userData,password: changePassword.newPassword})
        console.log("success change Password")
      }else {
        console.log("new Password didn't match")
      }
    }else {
      console.log('old password incorrect')
    }
  }

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
                <PasswordInput name={"oldPassword"} placeholder="Masukkan password saat ini" value={changePassword.oldPassword} onChange={(e) => inputHandler(e)}/>
              </span>
              <button className="forget-password">Lupa Password?</button>
            </div>
          </section>
          <section>
            <label>Password Baru</label>
            <span>
              <PasswordInput name={"newPassword"} placeholder="Masukkan password baru anda" value={changePassword.newPassword} onChange={(e) => inputHandler(e)}/>
            </span>
          </section>
          <section>
            <label>Konfirmasi Password</label>
            <span>
              <PasswordInput name={"confirmPassword"} placeholder="Konfirmasi password baru anda" value={changePassword.confirmPassword} onChange={(e) => inputHandler(e)}/>
            </span>
          </section>
        </div>
        <div className="submit-field">
          <button type="submit" onClick={(e) => submitHandler(e)}>Konfirmasi</button>
        </div>
      </div>
    </>
  );
}

const PasswordInput = ({ placeholder,name,value,onChange}) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <EyeIcon clickFunc={showPasswordHandler} />
    </>
  );
};
