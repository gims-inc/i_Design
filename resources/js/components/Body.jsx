import Header from './Header';
import Home from './sub/Home';
import About from './sub/About';
import Footer from './Footer';
import Services from './sub/Services';
import { createRoot } from 'react-dom/client';

import React from 'react';

import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Body() {
  return (
    <>
    <Router>

        <Header />

        <Routes>

            <Route exact path="/" element={<Home />} />

          {/* <Route exact path="/Work" element={<Work />} /> */}

            <Route exact path="/services" element={<Services />} />

            <Route exact path="/about" element={<About />} />

          {/* <Route exact path="/careers" element={<Careers />} /> */}

          {/* <Route exact path="/intouch" element={<Intouch />} /> */}
       
        </Routes>

       
        <Footer />

    </Router>
     
    </>
  );
}

export default Body;

const rootElement = document.getElementById('body')
const body = createRoot(rootElement);

body.render(<Body/>);