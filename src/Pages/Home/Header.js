import React, { useState } from "react";
// import symbol from './symbol.png'
import symbolInversed from '../../symbolrev.png';
import { FaSignInAlt } from 'react-icons/fa';

// import {} from "react-bootstrap"
function Header() {
    const title = useState("S&P");

    const handleSignIn = () => {
        console.log("you've triggered my trap card")
    }

    return (
        <div className="navbar">
            <div className="col-1 header-title">
                <b>{title}</b>
            </div>
            <div className="col-9">
            </div>
            <div className="col-1">
                <FaSignInAlt onClick={handleSignIn} />
            </div>
            <div className="col-1">
                <img src={symbolInversed} width="25px" alt="splogo" />
            </div>

        </div>
    )
}

export default Header;