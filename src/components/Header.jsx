import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { FaPrint, FaBoxOpen, FaLaptopCode, FaPalette } from 'react-icons/fa';



const servicesList = [
  { name: "Offset Printing", path: "/services/offset-printing", icon: <FaPrint /> },
  { name: "Digital Printing", path: "/services/digital-printing", icon: <FaLaptopCode /> },
  { name: "Packaging", path: "/services/packaging", icon: <FaBoxOpen /> },
  { name: "Design Services", path: "/services/design-services", icon: <FaPalette /> }
];

const menuItemsLeft = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" }
];

const menuItemsRight = [
  { name: "Our Blogs", path: "#" },
  { name: "Contact Us", path: "/contact" },
  { name: "Shop", path: "#" }
];

function Header({ isMenuOpen, setIsMenuOpen }) {
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      <header className="flex items-center justify-center text-black py-6 px-4 md:px-10 bg-white drop-shadow-md relative z-50">
        {/* Left Menu */}
        <ul className="hidden xl:flex items-center gap-5 font-semibold text-lg mr-4">
          {menuItemsLeft.map((item, index) => {
            if (item.name === "Services") {
              return (
                <li
                  key={index}
                  className="relative px-2 py-1 cursor-pointer transition-all duration-200 hover:text-blue-600 hover:scale-105"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <span><Link to={item.path}>{item.name}</Link></span>
                  {showServices && (
                    <ul className="absolute top-10 left-0 w-60 bg-white border rounded-xl shadow-xl flex flex-col z-50 p-4 space-y-2 transition-all duration-300">
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
            }
            return (
              <li key={index} className="px-2 py-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>

        {/* Logo */}
        <div className="flex-shrink-0 mx-2">
          <Link to="/">
            <img
              src={logo}
              alt="Subak Offset LLP Logo"
              className="w-28 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Right Menu */}
        <ul className="hidden xl:flex items-center gap-4 font-semibold text-lg ml-4">
          {menuItemsRight.map((item, index) => (
            <li key={index} className="px-2 py-1 hover:text-blue-600 transition-all duration-200 hover:scale-105">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <i
          className="bx bx-menu xl:hidden block text-4xl cursor-pointer ml-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </header>
    </>
    
  );
}

export default Header;


