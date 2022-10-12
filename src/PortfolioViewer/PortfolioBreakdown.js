import React from 'react';
import PortfolioChart from './PortfolioChart'
import PortfolioHoldings from './PortfolioHoldings'
import PortfolioTracker from './PortfolioTracker'
import '../CSS/PortfolioViewer.css'
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
                        <div className='col portfolio-chart'>
                            <PortfolioChart />
                        </div>
                        <div className='col portfolio-holdings'>
                            <PortfolioHoldings />
                        </div>
                    </div>
                    <div className='row portfolio-tracker'>
                        <PortfolioTracker />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioBreakdown;