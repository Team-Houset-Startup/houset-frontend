import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./assets/style/room-item-description.css";

const RoomItemDescription = () => {
  return (
    <>
      <Tabs>
        <Tab eventKey="description" title="Deskripsi">
          {/* description */}
          <ItemDescription />
        </Tab>
        <Tab eventKey="detail" title="Detail dan Spesifikasi">
          <ItemDetails />
        </Tab>
        <Tab eventKey="gallery" title="Galeri">
          <ItemGallery />
        </Tab>
        <Tab eventKey="room-interior" title="Interior Ruangan">
          <ItemRoomRecommendation />
        </Tab>
      </Tabs>
    </>
  );
};

export default RoomItemDescription;

const ItemDescription = () => {
  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Deskripsi Ruangan</h4>
      <p>
        Hanya diri Anda lah yang mengerti apa yang dapat membuat Anda merasa
        nyaman di rumah. Mari lihat contoh tata ruang keluarga minimalis modern
        yang dibuat khusus untuk Anda. Ruang tamu di mana Anda dapat menunjukkan
        apa yang Anda sukai dengan kabinet pintu kaca atau menyimpan sisa
        sisanya dengan cerdas di tempat yang tak terlihat, seperti di sebuah
        penyimpanan laci. Karena rumah tidak hanya mencerminkan Anda - tetapi
        juga mendukung Anda.
      </p>
    </div>
  );
};

const ItemDetails = () => {
  return (
    <div className="tab-content-list two-col">
      <div className="tab-item-detail">
        <h4 className="tab-title">Detail</h4>
        <ul>
          <li>Brand</li>
          <li>Brand</li>
          <li>Brand</li>
        </ul>
      </div>
      <div className="tab-item-specs">
        <h4 className="tab-title">Spesifikasi</h4>
        <ul>
          <li>Brand</li>
          <li>Brand</li>
          <li>Brand</li>
        </ul>
      </div>
    </div>
  );
};
const ItemGallery = () => {
  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Tampilan Ruangan</h4>
      <div className="room-gallery">{/* looping the image from product */}</div>
    </div>
  );
};

const ItemRoomRecommendation = () => {
  return (
    <div className="tab-content-list">
      <h4 className="tab-title">Produk yang melengkapi Ruangan</h4>
      <div className="room-related-product">
        {/* looping card from product suggest */}
      </div>
    </div>
  );
};
