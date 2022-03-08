import React from 'react';
import { Link } from 'react-router-dom';

export default function StartDesignBanner() {
    return (
        <>
            <div className="start-here">
                <p> Desain ruangan dengan <br /> kreasi mu sekarang juga! </p>
                <Link className="start-design" to="/kanvas"> <button className="reg-button"> Mulai Design </button> </Link>
            </div>
        </>
    )
}
