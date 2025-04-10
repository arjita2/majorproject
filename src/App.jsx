import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactUs';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400 scroll-smooth">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>

        <div id="contact">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
