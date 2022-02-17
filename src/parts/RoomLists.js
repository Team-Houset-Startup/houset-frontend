import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SampleRoom from '../assets/image/sample-room.png';
import Love from "../assets/image/love.png";
import "../assets/style/room-list.css";

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }        
        
        componentDidMount() {
            fetch("https://jsonplaceholder.typicode.com/users/")
            // fetch("https://randomuser.me/api/?results=8")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.map(data => (
                {
                    itemType: `${data.name}`,
                    itemName: `${data.username}`,
                    itemPrice: `${data.address.suite}`,
                    itemDiscount: `${data.address.zipcode}`,

                    // itemType: `${data.name.first}`,
                    // itemName: `${data.name.last}`,
                    // itemPrice: `${data.location.city}`,
                    // itemDiscount: `${data.location.postcode}`,
                    // itemThumbnail: `${data.picture.large}`,
                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: false
            }))
            .catch(error => console.log('parsing data failed', error))
/*
        fetch("https://jsonplaceholder.typicode.com/users/?results=8")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    thumbnail: `${data.picture.large}`,
                }
            )))
            .then(thumbnails => this.setState({
                thumbnails,
                isLoaded: false
            }))
            .catch(error => console.log('parsing image failed', error)); */
    }

    render() {
        const { items } = this.state;
        // console.log(items)
        return (
            <div className="preview-container">
                <div className="head-room"> 
                    <p className="list-title"> Desain Interior Ruangan </p>
                    <Link to = "/ruangan" className="see-more-link"> Lihat semua {'>'} </Link>
                </div>
                
                {/* <Link to = "/ruangan" className="see-more-link"> Lihat semua {'>'} </Link> */}
                <div className="best-product">
                    {
                        items.length > 0 ? items.slice(0,4).map(item => {
                            const { id, itemType, itemName, itemPrice, itemDiscount, itemThumbnail} = item;
                            return (
                                <div className="product-item">
                                    <a href="/furnitur">
                                        <div className="product-pict"> <img src={itemThumbnail} alt="" /> </div>
                                        <p className="item-type"> {itemType} </p>
                                        <p className="item-name"> {itemName} </p>
                                        <p className="item-price"> {itemPrice} </p>
                                        <p className="item-price-discounted"> {itemDiscount} </p>
                                    </a>
                                </div>
                            );
                        }) : null
                    }
                </div>
            </div>
        )
    }
}

export default RoomList;