import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import SearchBar from './SearchBar';
import { FaPrint, FaBoxOpen, FaLaptopCode, FaPalette } from 'react-icons/fa';

const servicesList = [
  { name: "Offset Printing", path: "#", icon: <FaPrint /> },
  { name: "Digital Printing", path: "#", icon: <FaLaptopCode /> },
  { name: "Packaging", path: "#", icon: <FaBoxOpen /> },
  { name: "Design Services", path: "#", icon: <FaPalette /> }
];

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#" },
  { name: "About Us", path: "/about" },
  { name: "Our Blogs", path: "#" },
  { name: "Contact Us", path: "#contact" },
  { name: "Shop", path: "#" }
];

function Header({ isMenuOpen, setIsMenuOpen }) {
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Header Bar */}
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <Link to="/">
          <img src={logo} alt="Subak Offset LLP Logo" className='w-52 hover:scale-105 transition-all' />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden xl:flex items-center gap-10 font-semibold text-base relative'>
          {menuItems.map((item, index) => {
            if (item.name === "Services") {
              return (
                <li
                  key={index}
                  className="relative px-4 py-2 cursor-pointer hover:bg-sky-400 hover:text-white rounded-md transition-all"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <span>{item.name}</span>

                  {showServices && (
                    <ul className="absolute top-14 left-0 w-60 bg-white border rounded-xl shadow-xl flex flex-col z-50 p-4 space-y-2 transition-all duration-300">
                      <h3 className="text-sm font-semibold text-gray-600 mb-2">Our Services</h3>
                      {servicesList.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-sky-100 transition-all"
                        >
                          <span className="text-blue-600 text-lg">{service.icon}</span>
                          <Link to={service.path} className="text-gray-700 hover:text-blue-600">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else {
              return (
                <li key={index} className="px-4 py-2 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
                  <Link to={item.path} className="block w-full h-full">{item.name}</Link>
                </li>
              );
            }
          })}
        </ul>

        <SearchBar />

        {/* Mobile Menu Toggle */}
        <i
          className="bx bx-menu xl:hidden block text-4xl cursor-pointer ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </header>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`xl:hidden w-full bg-white flex flex-col items-center gap-3 font-semibold text-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        {menuItems.map((item, index) => {
          if (item.name === "Services") {
            return (
              <li key={index} className="w-full text-center">
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="w-full p-4 hover:bg-sky-400 hover:text-white transition-all"
                >
                  {item.name} {showServices ? '▲' : '▼'}
                </button>
                {showServices && (
                  <ul className="flex flex-col bg-sky-50 w-full px-4 pb-4 pt-2 rounded-b-xl">
                    {servicesList.map((service, idx) => (
                      <li key={idx} className="py-2 flex gap-2 items-center hover:bg-sky-200 px-3 rounded-md transition">
                        <span className="text-blue-600 text-lg">{service.icon}</span>
                        <Link to={service.path} onClick={() => setIsMenuOpen(false)} className="text-base">{service.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={item.path} className="block w-full h-full">{item.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default Header;
