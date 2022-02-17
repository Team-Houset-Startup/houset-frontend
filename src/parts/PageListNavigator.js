import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
// import PageListNumber from '../elements/PageListNumber'
import "../assets/style/page-list-navigator.css"


const PageListNumber = () => {
    const page = [1, 2, 3, 4, 5];
    // const navigate = useNavigate();
    // const { pageNumber } = useParams();
    return (
        /* loop for page number inside list*/
        page.map(number => (
            <li key={number} className="page-number">
                {/* <a onClick={navigate(number)}> {number} </a> */}
                <Link to={"/furnitur"}> {number} </Link>
            </li>
        ))
    )
}

export default function PageListNavigator() {
    return (
        <div className="page-list-navigator">
            <ul className="page-navigator-group">
                {<PageListNumber />}
            </ul>
        </div>
    )
}
