import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';

export default function StartDesignBanner() {
    return (
        <>
            <div className="start-here">
                <p> Desain ruangan dengan <br /> kreasi mu sekarang juga! </p>
                {/* <Link className="start-design" to="/kanvas"> <button className="reg-button"> Mulai Design </button> </Link> */}
                <Link to="/canvas" className="start-design"> <Button text="Mulai Design" type="secondary-button" /> </Link>
            </div>
        </>
    )
}
