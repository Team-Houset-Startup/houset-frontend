import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-multi-carousel'

function Penawaran() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    return (
        <section>
            <div>
                Penawaran
            </div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </section>
    )
}

export default Penawaran