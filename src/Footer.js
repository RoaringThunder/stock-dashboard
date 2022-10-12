import React, { useState } from "react";
// import symbol from './symbol.png'

// import {} from "react-bootstrap"
function Footer() {
    const title = useState("S&P");

    return (
        <>
            <div className="row footer">
                <div className="col-4">
                    <span></span>
                </div>
                <div className="col-1">
                    <span>Strive</span>
                </div>
                <div className="col-2 footer-title">
                    <b>{title}</b>
                </div>
                <div className="col-1">
                    <span>Prosper</span>
                </div>
                <div className="col-4">
                    <span></span>

                </div>

            </div>
        </>
    )
}

export default Footer;