// import { Tab } from 'bootstrap'
import React from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import Product from '../Product/Product'

import "./assets/style/product-description.scss"

const description = (desc) => {
    return (
        <div>
            <h4 className="product-tab-subtitle"> Deskripsi Produk </h4>
            <p className="product-tab-information"> {desc} </p>
        </div>
    )
}

const detailSpecs = (product) => {
    // const detail = product.details;
    // const specification = product.specifications;

    return (
        <>
            <Row xs={1} sm={2}>
                <Col>
                    <p className="product-tab-subtitle"> Detail </p>
                    <Container className="product-tab-information">
                        {/* <Row> <Col> Brand </Col> <Col> {detail["brand"]} </Col> </Row> */}
                        <Row> <Col> Warna </Col> <Col> {product.color} </Col> </Row>
                        <Row> <Col> Kondisi Produk </Col> <Col> {product.condition} </Col> </Row>
                        <Row> <Col> style </Col> <Col> {product.style} </Col> </Row>
                        <Row> <Col> Material Dudukan </Col> <Col> {product.material_1} </Col> </Row>
                        <Row> <Col> Material Frame </Col> <Col> {product.material_2} </Col> </Row>
                        {/* <Row> <Col> Tipe Produk </Col> <Col> {product.product-te"]} </Col> </Row> */}
                        <Row> <Col> Material </Col> <Col> {product.material_3} </Col> </Row>
                    </Container>
                </Col>
                <Col>
                    <p className="product-tab-subtitle"> Spesifikasi </p>
                    <Container className="product-tab-information">
                        {/* <Row> <Col> Ukuran Kemasan </Col> <Col> {product["packing-size"]} </Col> </Row> */}
                        <Row> <Col> Ukuran Barang </Col> <Col> {product.length}cm x {product.width}cm x {product.height}cm </Col> </Row>
                        {/* <Row> <Col> Berat </Col> <Col> {product.weight} </Col> </Row> */}
                    </Container>
                </Col>
            </Row>
        </>
    )
}

const gallery = () => {
    return (
        <>
            <p className="product-tab-subtitle"> Tampilan Produk </p>
        </>
    )
}

const review = () => {
    return (
        <>
            <Row>
                <Col>
                    <p className="product-tab-subtitle"> Penilaian Produk </p>
                </Col>
                <Col>
                    <p className="product-tab-subtitle"> Ulasan Pelanggan </p>
                </Col>
            </Row>
        </>
    )
}

export default function ProductDescription({product}) {
    const products = {
        "desc": "Nestudio Kursi dapat membuat ruangan Anda tampil cantik. Kerangkanya yang terbuat dari kayu serta desain yang unik dan warna cerah akan memberikan aksen pada ruangan tanpa perlu banyak dekorasi. Letakkan kursi ini di dekat jendela atau berhimpitan dengan tembok dan lihat bagaimana ruangan akan terasa lebih hidup! Bantalan dengan busa empuk dan lapisan per membuat Anda tetap nyaman meski telah duduk berjam-jam. Finishing produk menggunakan veneer berbahan natural sehingga mempertahankan keindahan tekstur serat alami. Didesain ergonomis dengan kemiringan sudut (untuk sofa & kursi) dan dimensi yang telah disesuaikan dengan tinggi dan postur tubuh konsumen Asia.Telah melalui proses pengujian dan tersertifikasi sehingga kualitas dan ketahanannya terjamin.",
        "details": {
            "brand": "Nestudio",
            "color": "Tosca dan Cokelat",
            "condition": "Tidak butuh perakitan",
            "style": "Scandinavian",
            "material-dudukan": "Kayu",
            "material-frame": "Kayu",
            "product-type": "Upholstery",
            "material": "Kayu, Kain Woven, dan Busa"
        },
        "specifications": {
            "packing-size": ["79cm", "80cm", "82cm"],
            "item-size": ["72cm", "73cm", "75cm"],
            "weight": "14kg"
        }
    }

    return (
        <div className="product-description">
            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="product-tab-header">
                <Tab className="product-desc-tab" eventKey="description" title="Deskripsi">
                    {description(product.description)}
                </Tab>
                <Tab className="product-desc-tab" eventKey="detail" title="Detail dan Spesifikasi">
                    {detailSpecs(product)}
                </Tab>
                <Tab className="product-desc-tab" eventKey="gallery" title="Galeri">
                    {gallery()}
                </Tab>
                <Tab className="product-desc-tab" eventKey="review" title="Ulasan">
                    {review()}
                </Tab>
            </Tabs>
        </div>
    )
}
