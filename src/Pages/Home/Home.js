import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Button, Container } from 'react-bootstrap';
// import Header from './Header.js';
// import Footer from './Footer.js';
import PortfolioBreakdown from '../../PortfolioViewer/PortfolioBreakdown';

function Home() {


    return (
        <div className='my-body app-card-body'>
            <div className='row my-row'>
                <div className='col-6 my-col'>
                    <PortfolioBreakdown />
                </div>
                <div className='col-6 card shortcut-card my-col'>
                    123
                </div>
            </div>
        </div >
    );
}

export default Home;
