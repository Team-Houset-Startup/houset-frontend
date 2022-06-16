import React from "react";
import { ArrowBottomIcon } from "./assets/Icon";
import profilePict from "./assets/image/Profile.png";

function ProfileInfo() {
  return (
    <>
      <div className="profile-container-header">
        <h1 className="header-title">Profil Saya</h1>
      </div>
      <div className="profile-container-body">
        <div className="account-body-card">
          <div className="card">
            <img src={profilePict} alt="profile" className="card-img" wid />
            <h2 className="card-name">Muhammad Juno</h2>
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
                <input type="text" name="name" value={""} onChange={""} />
              </div>
              <div className="form-section-email">
                <label htmlFor="">Email</label>
                <input type="text" name="email" value={""} onChange={""} />
              </div>
            </section>
            <section>
              <div className="form-section-phone">
                <label htmlFor="">Nomor Telepon</label>
                <input type="text" name="" value={""} onChange={""} />
              </div>
              <div className="form-section-address">
                <label htmlFor="">Alamat</label>
                <input type="text" name="" value={""} onChange={""} />
              </div>
            </section>
            <section>
              <div className="form-section-date-birth">
                <label htmlFor="">Tanggal Lahir</label>
                <div className="select">
                  <div className="select-section">
                    <select name="" id="">
                      <option value={null}>Tanggal</option>
                    </select>
                    <ArrowBottomIcon />
                  </div>
                  <div className="select-section">
                    <select name="" id="">
                      <option value={null}>Bulan</option>
                    </select>
                    <ArrowBottomIcon />
                  </div>
                  <div className="select-section">
                    <select name="" id="">
                      <option value={null}>Tahun</option>
                    </select>
                    <ArrowBottomIcon />
                  </div>
                </div>
              </div>
              <div className="form-section-gender">
                <label htmlFor="gender">Jenis Kelamin</label>
                <div className="radio">
                  <div className="gender-men">
                    <input type="radio" name="gender" value="man"/>
                    <label className="radio-label">Laki-laki</label>
                  </div>
                  <div className="gender-woman">
                    <input type="radio" name="gender" />
                    <label className="radio-label">Perempuan</label>
                  </div>
                </div>
              </div>
            </section>
          </form>
          <div className="account-form-footer">
            <button>Simpan</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
