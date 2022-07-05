import React from "react";
import { useState, useEffect } from "react";
import "./assets/style/profile-transaction.css";
import housetLogo from "../assets/image/houset-logo2.png";
import data from "./data.json";
import { LocalShippingIcon, StarRateIcon } from "./assets/Icon";
import Button from "../Components/Button";

const FilterTransactionButton = ({
  filterTransaction,
  setFilterTransaction,
}) => {
  // filter component bar based on status
  const availableFilters = [
    "Semua",
    "Belum Bayar",
    "Berlangsung",
    "Selesai",
    "Dibatalkan",
  ];

  return (
    <div className="filter-transaction">
      {availableFilters.map((filter, i) => {
        return (
          <button
            key={i}
            onClick={() => setFilterTransaction(filter)}
            className={`filter-button ${
              filterTransaction === filter ? "active" : ""
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};
const PackageStatus = ({ status, name }) => {
  switch (status) {
    case "shipped":
      return (
        <div className="shipped">
          <LocalShippingIcon />
          <p>Paket telah diterima {name}</p>
        </div>
      );

    default:
      return null;
  }
};
const ProductTransaction = ({ transaction }) => {
  const products = transaction.product;
  return (
    <div className="transaction-product-card">
      <div className="transaction-header">
        <div className="transaction-header-left">
          <img src={housetLogo} alt="houset" width={"115px"} />
          <p className="transaction-info-date">{transaction.date}</p>
          <label className={"transaction-status success"}>{transaction.status === "Succeed" ? "Selesai" :""}</label>
        </div>
        <div className="transaction-header-right">
          <PackageStatus
            status={transaction.paketStatus}
            name={transaction.paketName}
          />
        </div>
      </div>
      <div className="transaction-products">
        {products === undefined
          ? ""
          : products.map((product, i) => {
              return <ProductTransactionDetails product={product} key={i} />;
            })}
      </div>
      <div className="transaction-footer">
        <div className="transaction-footer-price">
          <h5>Total Pesanan</h5>
          <h5>{transaction.price}</h5>
        </div>
        <div className="transaction-footer-action">
          <div className="transaction-action-rating">
            {transaction.rating ? (
              <>
                <StarRateIcon />
                <p>Penilaian anda telah dikirm</p>
              </>
            ) : (
              <Button text="Beri Penilaian" type={'action-button'}/>
            )}
          </div>
          <div className="transaction-action">
            <Button text="Hubungi Penjual" type={'action-button'}/>
            <Button text="Beli Lagi" type={'primary-button'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
const ProductTransactionDetails = ({ product }) => {

  function formatRupiah(angka, prefix){
    // function to format from integer to rupiah format
    let number_string = angka.toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    if(ribuan){
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix === undefined ? rupiah : (rupiah ? 'Rp ' + rupiah : '');
  }


  return (
    <div className="transaction-product">
      <div className="transaction-product-item">
        <div className="transaction-product-image">
          <img src={product.imageSrc} alt="{produk}" />
          {/* alt is product name */}
        </div>
        <div className="transaction-product-details">
          <h5 className="transaction-product-name">{product.name}</h5>
          <h5 className="transaction-product-price">
            {product.amount} barang x {formatRupiah(product.price,'Rp ')}
          </h5>
        </div>
      </div>
      <div className="transaction-product-total-price">
        <p>{formatRupiah(product.amount * product.price,'Rp ')}</p>
      </div>
    </div>
  );
};

export default function ProfileTransaction() {
  const [filterTransaction, setFilterTransaction] = useState("Semua");
  const [userTransactions, setUserTransactions] = useState([]);
  useEffect(() => {
    setUserTransactions(data.transactions);
  }, []);

  return (
    <>
      <div className="profile-container-header">
        <h1 className="header-title">Pesanan Saya</h1>
      </div>
      <div className="profile-container-body transaction">
        <FilterTransactionButton
          filterTransaction={filterTransaction}
          setFilterTransaction={setFilterTransaction}
        />
        <div className="transaction-product-card-list">
          {userTransactions === undefined
            ? ""
            : userTransactions.map((transaction, i) => {
                return <ProductTransaction transaction={transaction} key={i} />;
              })}
        </div>
      </div>
    </>
  );
}
