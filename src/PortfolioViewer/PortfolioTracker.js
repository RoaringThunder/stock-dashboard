import React from "react";
import '../CSS/PortfolioViewer.css'
import LineChart from '../Functions/Charts/LineChart'


function PortfolioTracker() {

    return (
        <div className='card my-card portfolio-tracker'>
            <LineChart />
        </div>
    )
}

export default PortfolioTracker;