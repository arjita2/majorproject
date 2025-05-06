import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ContactUs from './pages/ContactUs';

import OurBlogs from './pages/OurBlogs';
import Shop from './pages/Shop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-emerald-400 scroll-smooth">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<ContactUs />}/>
          <Route path="/blogs" element={<OurBlogs />} />
          <Route path="/shop" element={<Shop />} />
          


          
          {/* Optional: Catch-all for 404 */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
