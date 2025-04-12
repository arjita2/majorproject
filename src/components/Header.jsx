import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { servicesList } from '../data/servicesData'; // Make sure the path is correct

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
  const [hoveredServiceId, setHoveredServiceId] = useState(null);

  return (
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
                onMouseLeave={() => {
                  setShowServices(false);
                  setHoveredServiceId(null);
                }}
              >
                <span><Link to={item.path}>{item.name}</Link></span>

                {showServices && (
                  <ul className="absolute top-10 left-0 bg-white border rounded-xl shadow-xl z-50 flex flex-col w-72 p-4 space-y-2 transition-all duration-300">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">Our Services</h3>
                    {servicesList.map((service, idx) => (
                      <li
                        key={idx}
                        className="relative"
                        onMouseEnter={() => setHoveredServiceId(service.id)}
                        onMouseLeave={() => setHoveredServiceId(null)}
                      >
                        <div className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-sky-100 transition-all group">
                          <span className="text-blue-600 text-lg mt-1"><service.icon /></span>
                          <Link
                            to={`/services/${service.id}`}
                            className="text-gray-800 text-sm font-semibold hover:text-blue-600"
                          >
                            {service.name}
                          </Link>
                        </div>

                        {/* Subservices menu (only if hovered) */}
                        {hoveredServiceId === service.id && service.subservices && (
                          <ul className="absolute left-full top-0 w-64 bg-white border rounded-xl shadow-lg p-3 space-y-2 z-50">
                            {service.subservices.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={`/services/${service.id}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-sm text-gray-700 hover:text-blue-600 transition-all"
                                >
                                  • {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
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
  );
}

export default Header;
