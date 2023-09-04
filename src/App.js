import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/home/Home'
import CustomCursor from './components/styles/CustomCursor';
import img from './assets/logo.png';

// Lazy-loaded components
const About = lazy(() => import('./components/about/About'));
const Project = lazy(() => import('./components/project/Project'));
const Service = lazy(() => import('./components/service/Service'));
const Contact = lazy(() => import('./components/contact/Contact'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay of 2 seconds
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
         <Suspense fallback={<div className="viewport-filler"></div>}>
           <Routes>
            {/* Define routes for lazy-loaded components */}
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </Suspense>
          <Footer />
        </HashRouter>
      )}
    </div>
  );
}

export default App;
