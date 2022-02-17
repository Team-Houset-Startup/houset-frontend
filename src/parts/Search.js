import React from 'react';

export default function Search() {
    function QuickTag(props) {
        return <button> {props.keyword} </button>
    }

    return (
        <div className="search-form">
            <form action="">
                <input type="text" name="" id="" placeholder="Cari produk, kategori produk atau ruangan" />
                <input type="submit" value="Cari" />
            </form>
            <ul className="quick-select">
                <li> <QuickTag keyword="Dekorasi" /> </li>
                <li> <QuickTag keyword="Peralatan Dapur" /> </li>
                <li> <QuickTag keyword="Perlengkapan Kamar Mandi" /> </li>
                <li> <QuickTag keyword="Perlengkapan Kantor" /> </li>
                <li> <QuickTag keyword="Aksesoris Penyimpanan" /> </li>
                <li> <QuickTag keyword="Aksesoris Kamar Anak" /> </li>
                <li> <QuickTag keyword="Boneka Bebek" /> </li>
            </ul>
        </div>
    )
}
