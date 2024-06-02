import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainPage from './MainPage';
import Discography from './Discography';
import Albums from './Albums';
import Merch from './Merch';
import ProductDetail from './ProductDetail';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const headerClass = () => {
    switch (location.pathname) {
      case '/discography':
        return 'header-discography';
      case '/albums':
        return 'header-albums';
      case '/merch':
        return 'header-merch';
      default:
        return 'header-main';
    }
  };

  return (
    <>
      <header className={headerClass()}>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/discography">Discography</Link></li>
            <li><Link to="/albums">Albums</Link></li>
            <li><Link to="/merch">Merch</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/merch" element={<Merch addToCart={addToCart} />} />
            <Route path="/merch/:id" element={<ProductDetail addToCart={addToCart} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
