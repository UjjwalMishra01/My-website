import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import './App.css';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <div id="home"><Header /></div>
      
      <Banner />
      <div id="about">
        <About />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="services">
        <Services />
      </div>
      <Footer />
    </>
  );
}

export default App;
