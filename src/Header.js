import React, { useState } from "react";
// import symbol from './symbol.png'
import symbolInversed from './symbolrev.png';

// import {} from "react-bootstrap"
function Header() {
    const title = useState("S&P");
    const [fixed, setFixed] = useState(false);

    function setFixedHeader() {
        if (window.scrollY >= 80) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }

    window.addEventListener("scroll", setFixedHeader);

    return (
        <div className="navbar">
            {/* <div className="col-1">
                <span>Strive</span>
            </div>
            <div className="col-1">
                <span>Prosper</span>
            </div> */}

            <div className="col-1 header-title">
                <b>{title}</b>
            </div>
            <div className="col-10">

            </div>
            <div className="col-1">
                <img src={symbolInversed} width="50px" alt="splogo" />
            </div>

        </div>
    )
}

export default Header;