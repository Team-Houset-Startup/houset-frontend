import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkSeeMore from '../Components/LinkSeeMore';

import "./assets/style/product-list.css"

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }        
        
        componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.map(data => (
                {
                    itemType: `${data.name}`,
                    itemName: `${data.username}`,
                    itemPrice: `${data.address.suite}`,
                    itemDiscount: `${data.address.zipcode}`,
                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: false
            }))
            .catch(error => console.log('parsing data failed', error))
    }

    render() {
        const { items } = this.state;
        return (
            <div className="preview-container">
                
                <LinkSeeMore title="Produk Terbaik" links="/furnitur" text="Lihat Semua"/>
                
                <div className="best-product">
                    {
                        items.length > 0 ? items.slice(0,4).map(item => {
                            const { id, itemType, itemName, itemPrice, itemDiscount, itemThumbnail} = item;
                            return (
                                <div className="product-item" key={id}>
                                    <Link to="/furnitur">
                                        <div className="product-pict"> <img src={itemThumbnail} alt="" /> </div>
                                        <p className="item-type"> {itemType} </p>
                                        <p className="item-name"> {itemName} </p>
                                        <p className="item-price"> {itemPrice} </p>
                                        <p className="item-price-discounted"> {itemDiscount} </p>
                                    </Link>
                                </div>
                            );
                        }) : null
                    }
                </div>
            </div>
        )
    }
}

export default ProductList;

/* export default function ProductLists() {
    return (
        <>

            <p className="home-section2-title"> Produk Terbaik </p>
            <div className="best-product">
                <div className="product-item">
                    <Link to="/product">
                        <div className="product-pict"> <img src="assets/pict/kursi.png" alt="" /> </div>
                        <p className="item-type"> Kursi Tamu </p>
                        <p className="item-name"> Kursi Stacy </p>
                        <p className="item-price"> Rp 1.500.000 </p>
                        <p className="item-price-discounted"> Rp 1.099.000 </p>
                    </Link>
                </div>
                <div className="product-item">
                    <div className="product-pict"> <img src="assets/pict/kursi.png" alt="" /> </div>
                    <p className="item-type"> Kursi Tamu </p>
                    <p className="item-name"> Kursi Stacy </p>
                    <p className="item-price"> Rp 1.500.000 </p>
                    <p className="item-price-discounted"> Rp 1.099.000 </p>
                </div>
                <div className="product-item">
                    <div className="product-pict"> <img src="assets/pict/kursi.png" alt="" /> </div>
                    <p className="item-type"> Kursi Tamu </p>
                    <p className="item-name"> Kursi Stacy </p>
                    <p className="item-price"> Rp 1.500.000 </p>
                    <p className="item-price-discounted"> Rp 1.099.000 </p>
                </div>
                <div className="product-item">
                    <div className="product-pict"> <img src="assets/pict/kursi.png" alt="" /> </div>
                    <p className="item-type"> Kursi Tamu </p>
                    <p className="item-name"> Kursi Stacy </p>
                    <p className="item-price"> Rp 1.500.000 </p>
                    <p className="item-price-discounted"> Rp 1.099.000 </p>
                </div>
            </div>

            <Routes>
                <Route path="/product" element={<Furniture />} />
            </Routes>
        </>
    )
} */
