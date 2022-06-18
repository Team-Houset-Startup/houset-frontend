import React, { useEffect, useState } from "react";
import { ArrowBottomIcon } from "./assets/Icon";
// import profilePict from "./assets/image/Profile.png";

export default function ProfileInfo({ userData, setUserData }) {
  const [futureData, setFutureData] = useState({});

  useEffect(() => {
    setFutureData({
      name: userData.name,
      imgSrc: userData.imgSrc,
      email: userData.email,
      phone: userData.phone,
      gender: userData.gender,
      currLocation: userData.currLocation,
      date: userData.date,
      month: userData.month,
      year: userData.year,
    });
  }, [userData]);

  function handleChange(e) {
    setFutureData({
      ...futureData,
      [e.target.name]: e.target.value,
    });
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({...userData,...futureData})
  };

  return (
    <>
      <div className="profile-container-header">
        <h1 className="header-title">Profil Saya</h1>
      </div>
      <div className="profile-container-body">
        <div className="account-body-card">
          <div className="card">
            <img src={userData.imgSrc} alt="profile" className="card-img" />
            <h2 className="card-name">{userData.name}</h2>
            <button className="card-add-photo">Pilih Foto</button>
          </div>
          <div className="card-info">
            <p>Ukuran file: maks. 1 MB</p>
            <p>Format file: .JPG, .JPEG, .PNG</p>
          </div>
        </div>
        <div className="account-body-form">
          <h2 className="form-header">Profile Information</h2>
          <form className="update-profile">
            <section>
              <div className="form-section-name">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={futureData.name === undefined ? "" : futureData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-section-email">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={futureData.email === undefined ? "" : futureData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </section>
            <section>
              <div className="form-section-phone">
                <label>Nomor Telepon</label>
                <input
                  type="text"
                  name="phone"
                  value={futureData.phone === undefined ? "" : futureData.phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="form-section-address">
                <label>Alamat</label>
                <input
                  type="text"
                  name="currLocation"
                  value={
                    futureData.currLocation === undefined
                      ? ""
                      : futureData.currLocation
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </section>
            <section>
              <div className="form-section-date-birth">
                <label>Tanggal Lahir</label>
                <div className="select">
                  <div className="select-section">
                    <select
                      name="date"
                      id=""
                      value={
                        futureData.date === undefined ? "" : futureData.date
                      }
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="tanggal" disabled>Tanggal</option>
                      <OptionSelectItem type="tanggal" />
                    </select>
                    <ArrowBottomIcon />
                  </div>
                  <div className="select-section">
                    <select
                      name="month"
                      id=""
                      value={
                        futureData.month === undefined ? "" : futureData.month
                      }
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="bulan" disabled>Bulan</option>
                      <OptionSelectItem type="bulan" />
                    </select>
                    <ArrowBottomIcon />
                  </div>
                  <div className="select-section">
                    <select
                      name="year"
                      id=""
                      value={
                        futureData.year === undefined ? "" : futureData.year
                      }
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="tahun" disabled>Tahun</option>
                      <OptionSelectItem type="tahun" />
                    </select>
                    <ArrowBottomIcon />
                  </div>
                </div>
              </div>
              <div className="form-section-gender">
                <label htmlFor="gender">Jenis Kelamin</label>
                <div className="radio">
                  <div className="gender-men">
                    <input
                      type="radio"
                      name="gender"
                      value="L"
                      checked={futureData.gender === "L"}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="radio-label">Laki-laki</label>
                  </div>
                  <div className="gender-woman">
                    <input
                      type="radio"
                      name="gender"
                      value="P"
                      checked={futureData.gender === "P"}
                      onChange={(e) => handleChange(e)}
                    />
                    <label className="radio-label">Perempuan</label>
                  </div>
                </div>
              </div>
            </section>
          </form>
          <div className="account-form-footer">
            <button onClick={(e) => submitHandler(e)}>Simpan</button>
          </div>
        </div>
      </div>
    </>
  );
}

const OptionSelectItem = ({ type }) => {
  let itemList;
  switch (type) {
    case "tanggal":
      itemList = [];
      for (let i = 1; i <= 31; i++) {
        itemList.push(i.toString());
      }
      return itemList.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ));

    case "bulan":
      itemList = [];
      for (let i = 1; i <= 12; i++) {
        itemList.push(i.toString());
      }
      return itemList.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ));
    case "tahun":
      itemList = [];
      var max = new Date().getFullYear();
      var min = max - 75;

      for (let i = max; i >= min; i--) {
        itemList.push(i.toString());
      }
      return itemList.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ));

    default:
      return null;
  }
};
