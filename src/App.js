import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Button, Container } from 'react-bootstrap';
import './App.css';
import Header from './Pages/Home/Header';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import { Modal } from 'react-modal';

function App() {


  return (
    <Router>
      <>
        {/* <div className='navbar-container'> */}
        <Header />
        {/* </div> */}
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </div >
        <div className='footer-container'>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
