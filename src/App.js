import React from 'react';
// import { Button, Container } from 'react-bootstrap';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import PortfolioBreakdown from './PortfolioViewer/PortfolioBreakdown';

function App() {


  return (
    <>
      <div className='navbar-container'>
        <Header />
      </div>
      <div className="App">
        <div className='my-body app-card-body'>
          <div className='row my-row'>
            <div className='col my-col'>
              <PortfolioBreakdown />
            </div>
            <div className='col card shortcut-card my-col'>
              123
            </div>
          </div>
        </div >
      </div >
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
