import React from "react";
import { useNavigate } from 'react-router-dom';

function Kanvas() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <section>
            <div>
                Kanvas desain
            </div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </section>
    )
}

export default Kanvas