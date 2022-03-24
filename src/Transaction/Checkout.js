import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import Button from '../Components/Button'
import CartContainer from './CartContainer'
import CartItem from './CartItem'
import CartSummary from "./CartSummary.js"
import { product } from "../db/product"

import "./assets/style/checkout.css"


// const CartContainer = () => {
//     return (
//         <Container className="cart-container">
//             <Row className="cart-container-header">
//                 <Col xl={{ order: 1, span: 5 }} style={{ width: "300px", textAlign: "left" }} > Produk </Col>
//                 <Col xl={{ order: 2 }}> Harga </Col>
//                 <Col xl={{ order: 3 }}> Jumlah </Col>
//                 <Col xl={{ order: 4 }}> Total </Col>
//             </Row>

//             {product.map((item, key) => {
//                 return (
//                     <Row className="cart-container-elm">
//                         <Col xl={{ order: 1, span: 5 }} lg={{ order: 1, span: 6 }} style={{ width: "300px" }} >

//                             <CartItem type={item.type} name={item.name} />
//                         </Col>

//                         <Col xl={{ order: 2 }} lg={{ order: 2 }} className="cart-container-info">
//                             <p> Rp {item.price} </p>
//                         </Col>

//                         <Col xl={{ order: 3 }} lg={{ order: 3 }} className="cart-container-info">
//                             {item.qty}
//                         </Col>

//                         <Col xl={{ order: 4 }} lg={{ order: 4 }} className="cart-container-info">
//                             <Row xl={2}>
//                                 Rp {item.subPrice}
//                             </Row>
//                         </Col>
//                     </Row>
//                 )
//             })
//             }
//         </Container>
//     )
// }

export default function Checkout() {

    function countTotalPrice() {
        let price = 0;
        product.map((item) => {
            price += item.subPrice
        })
        return price;
        // return (
        //     <p> 10 </p>
        // )
    }

    return (
        <>
            <NavigationBar />
            <Container className="transaction-container-main">
                <Row>
                    <p className="transaction-title"> Checkout </p>
                    <p className="checkout-subtitle"> Mohon selesaikan pembelian anda dengan melengkapi detail pembayaran </p>
                </Row>

                <Row>
                    <p className="checkout-loc"> Alamat Pengiriman </p>
                </Row>

                <Row xl={12} sm={2} >
                    {/* <hr /> */}
                    <Col xl={{ span: 7 }} sm={{ span: 10 }}>
                        <Row className="checkout-details">
                            <Col>
                                <p className="checkout-details-text"> Muhammad Juno <span> (Rumah) </span> </p>
                                <p className="checkout-details-text"> 082249128412 </p>
                                <p className="checkout-details-text"> Perumahan Permata Buah Batu, Blok. C, No. 146, Lengkong, Bojongsoang, Bandung,40287 </p>
                            </Col>

                            <Col xl={{ span: 1 }} sm={{ span: 1 }} className="checkout-details-edit justify-content-end">
                                <Button type="action-button" text="Edit" />
                            </Col>
                        </Row>
                        <Row>
                            <CartContainer feature="checkout"/>
                        </Row>
                        <Row>
                            <Col xl={{ offset:10, span:"auto" }} style={ {marginTop:10} }>
                                <Button type="primary-button" text="Pilih Kurir" toPage="/" />
                            </Col>
                        </Row>
                    </Col>

                    <Col xl={{ span: 3, offset: 1 }} sm={{ span: 10 }}>
                        <CartSummary total={countTotalPrice()}/>
                    </Col>
                    {/* <hr /> */}
                </Row>

                {/* <Row>
                    <Col xl={{ span: 7 }}>
                        <CartContainer />
                    </Col>
                    <Col>
                        <CartSummary />
                    </Col>
                </Row> */}

                {/* <Row>
                    <Col xl={{ offset: 5 }} >
                        <p className="cart-subtotal"> Subtotal Rp {countTotalPrice()} </p>
                        <Button type="primary-button" text="Pilih Kurir" toPage="/" />
                    </Col>
                </Row> */}
            </Container>
            <Footer />
        </>
    )
}
