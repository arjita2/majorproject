import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-10 px-8 md:px-32">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left - About */}
        <div className="md:w-1/3">
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">Subak Offset LLP</h2>
          <p>
            Established in 2012, Subak Offset LLP is one of the leading printing solution providers in Kolhapur.
          </p>
        </div>

        {/* Center - Location */}
        <div className="md:w-1/3">
          <h3 className="text-white text-xl font-semibold mb-2">Our Location</h3>
          <p>
            1243/36 B Ward, Charne Engineering Works, <br />
            Shivaji Udyamnagar, Kolhapur
          </p>
          <a
            href="https://maps.google.com?q=1243/36+B+Ward,+Shivaji+Udyamnagar,+Kolhapur"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 mt-2 block"
          >
            📍 Get Directions
          </a>
        </div>

        {/* Right - Contact Info */}
        <div className="md:w-1/3">
          <h3 className="text-white text-xl font-semibold mb-2">Contact Us</h3>
          <p>📞 9922430684</p>
          <p>📞 9011169691</p>
          <p>✉️ info@subakoffset.com</p>

          {/* Optional: Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Subak Offset LLP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

