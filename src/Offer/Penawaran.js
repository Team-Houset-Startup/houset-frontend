import React from "react";
import { useNavigate } from "react-router-dom";

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