import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/project/Project';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/styles/CustomCursor';
import img from './assets/logo.png';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <div className={`loading-container ${isLoading ? 'loading-active' : ''}`}>
      <img
          className="loading-gif"
          src={img}
          alt="Loading"
          width="100" 
          height="100" 
        />
      </div>
      <CustomCursor />
      {!isLoading && (
        <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </HashRouter>
      )}
    </div>
  );
}

export default App;
