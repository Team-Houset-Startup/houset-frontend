import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-multi-carousel'

function Penawaran() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            paritialVisibilityGutter: 60
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
    };
    return (
        <section>
            <div>
                Penawaran
            </div>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
            <Carousel responsive={responsive}>
                <div> 1 </div>
                <div> 2 </div>
                <div> 3 </div>
                <div> 4 </div>
            </Carousel>

        </section>
    )
}

export default Penawaran