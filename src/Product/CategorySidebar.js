import React from 'react';

import "./assets/style/category-sidebar.css";

// Opsi kategori yang ada di samping kiri

export default function CategorySidebar() {
    return (
        <div className="category-sidebar">
            <p className="category-title-text"> Kategori </p>
            <hr className="title-border"/>
            <div className="list-choice">
                <ul className="cat1-ruangan">
                    <p className="category-section"> Ruangan </p>
                    <hr className="section-border"/>
                    <li> <input type="checkbox" /> Ruang Tamu </li>
                    <li> <input type="checkbox" /> Ruang Kerja </li>
                    <li> <input type="checkbox" /> Ruang Makan </li>
                    <li> <input type="checkbox" /> Ruang Keluarga </li>
                    <li> <input type="checkbox" /> Ruang Dapur </li>
                    <li> <input type="checkbox" /> Ruang Tidur </li>
                </ul>

                <ul className="cat2-desain">
                    <p className="category-section"> Desain Interior </p>
                    <hr className="section-border"/>
                    <li> <input type="checkbox" /> Rumah </li>
                    <li> <input type="checkbox" /> Apartemen </li>
                    <li> <input type="checkbox" /> Kantor </li>
                    <li> <input type="checkbox" /> Kitchen Set </li>
                    <li> <input type="checkbox" /> Hotel </li>
                    <li> <input type="checkbox" /> Toko</li>
                </ul>

                <ul className="cat3-furniture">
                    <p className="category-section"> Furniture </p>
                    <hr className="section-border"/>
                    <li> <input type="checkbox" /> Kursi </li>
                    <li> <input type="checkbox" /> Sofa </li>
                    <li> <input type="checkbox" /> Meja </li>
                    <li> <input type="checkbox" /> Lampu </li>
                    <li> <input type="checkbox" /> Karpet </li>
                    <li> <input type="checkbox" /> Tempat Tidur </li>
                    <li> <input type="checkbox" /> Kasur </li>
                    <li> <input type="checkbox" /> Dekorasi</li>
                </ul>

                <ul>
                    <p className="category-section"> Harga </p>
                    <hr className="section-border"/>
                </ul>
            </div>
        </div>
    )
}
