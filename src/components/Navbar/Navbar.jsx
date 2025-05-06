import React from 'react';
import { NavLink } from 'react-router-dom'; // React Router for navigation
import './Navbar.css'; // Optional CSS file

const Navbar = () => {
  return (
    <div className="bg-red-500 p-4 flex gap-6 items-center">
      <h1 className="text-white font-bold text-xl">App</h1>

      {/* Internal Links using NavLink */}
      <NavLink
        to="/about"
        className="text-white hover:text-yellow-400 transition duration-300"
      >
        About Us
      </NavLink>

      <NavLink
        to="/blogs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-yellow-400 transition duration-300"
      >
        Our Blogs
      </NavLink>

      <NavLink
        to="/shop"
        className="text-white hover:text-yellow-400 transition duration-300"
      >
        Shop
      </NavLink>

      <NavLink
        to="/contact"
        className="text-white hover:text-yellow-400 transition duration-300"
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navbar;


