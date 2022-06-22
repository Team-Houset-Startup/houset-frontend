import React, { useContext } from "react";
import ReactModal from "react-modal";
import ModalContext from "../context/modal";
import { CloseIcon } from "../Profile/assets/Icon";
import './assets/style/modal.css'

ReactModal.setAppElement(document.getElementById("root"));
ReactModal.defaultStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
    content: {}
  }
const AddAddress = () => {
  const { modalIsOpen, closeModal } = useContext(ModalContext);
  

  const labelAddressHandle = (e) => {
    e.preventDefault()

  }
  return (
    <ReactModal
      isOpen={modalIsOpen}
      shouldCloseOnOverlayClick={true}
      style={{content:"",overlay:""}}
      onRequestClose={closeModal}
    >
      <form className="add-address">
        <div className="form-add-address-header">
          <h1 className="form-title">Tambah Alamat</h1>
          <button className="form-close-button" onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <div className="form-add-address-body">
          <div className="two-col-section">
            <div className="label-input-field">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukan nama anda" />
            </div>
            <div className="label-input-field">
              <label>Nomor Telepon</label>
              <input type="text" placeholder="Masukkan nomor telepon anda" />
            </div>
          </div>
          <div className="two-col-section">
            <div className="label-input-field">
              <label>Kota & Kecamatan</label>
              <input type="text" placeholder="Masukan kota & kecamatan anda" />
            </div>
            <div className="label-input-field">
              <label>Label</label>
              <div className="button-label-address">
                <button className="active" onClick={(e)=>labelAddressHandle(e)}>Rumah</button>
                <button className="" onClick={(e)=>labelAddressHandle(e)}>kantor</button>
              </div>
            </div>
          </div>
          <div className="label-input-field">
            <label>Alamat Lengkap</label>
            <textarea  placeholder="Masukan alamat lengkap anda" />
          </div>
          <div className="label-input-field">
            <label>Catatan untuk kurir (optional)</label>
            <input
              type="text"
              placeholder="Masukan detail lainnya (cth: patokan / blok / pesan khusus,dll)"
            />
          </div>
          <div className="main-address-settings">
            <input type="checkbox" name="main-address" />
            <label htmlFor="main-address">Jadikan alamat utama</label>
          </div>
        </div>
        <div className="form-add-address-footer">
          <button className="form-save-button" >Simpan</button>
        </div>
      </form>
    </ReactModal>
  );
};
export default AddAddress;
