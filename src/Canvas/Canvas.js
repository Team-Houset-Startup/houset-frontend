import React from "react";
import { useNavigate } from 'react-router-dom';
import NavbarCanvas from "./NavbarCanvas";

function Canvas() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <>
            <NavbarCanvas />
            <section>
                <div>
                    Kanvas desain
                </div>
                <button type="button" onClick={handleClick}>
                    Go home
                </button>
            </section>
        </>
    )
}

export default Canvas