import React from 'react';
import PortfolioChart from './PortfolioChart'
import PortfolioHoldings from './PortfolioHoldings'
import PortfolioTracker from './PortfolioTracker'
import '../CSS/PortfolioViewer.css'
// import useWindowDimensions from '../Hooks/Dimensions';
function PortfolioBreakdown() {

    return (
        <>
            <div className="Portfolio-Viewer">
                <div className="card my-card">
                    <div className='my-card-header'>
                        <div>
                            <span>Header</span>
                        </div>
                    </div>
                    <div className='row full-width'>
                        <div className='col-6 portfolio-chart'>
                            <PortfolioChart />
                        </div>
                        <div className='col-6 portfolio-holdings'>
                            <PortfolioHoldings />
                        </div>
                    </div>
                    <div className='row-6 portfolio-tracker'>
                        <PortfolioTracker />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioBreakdown;