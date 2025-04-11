import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsSection = () => {
  return (
    <section className="bg-[#18191A] text-white py-16 px-6 md:px-24">
      <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Services List */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Services</h3>
          <ul className="space-y-3 text-gray-300 text-base">
            <li className="border-b border-gray-600 pb-2">Corporate Stationery</li>
            <li className="border-b border-gray-600 pb-2">Outdoor Signage</li>
            <li className="border-b border-gray-600 pb-2">Marketing Collaterals</li>
            <li className="border-b border-gray-600 pb-2">Box Packaging</li>
            <li className="border-b border-gray-600 pb-2">Indoor Signage</li>
            <li className="border-b border-gray-600 pb-2">POS Display Shelves</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <FaPhoneAlt className="text-cyan-400 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us:</h3>
          <p className="text-gray-300 mb-1">+91 9922430684</p>
          <p className="text-gray-300 mb-4">+91 9011169691</p>

          <h3 className="text-xl font-semibold mb-2">Email:</h3>
          <p className="text-gray-300 mb-4">info@subakoffset.com</p>

          <h3 className="text-xl font-semibold mb-2">WhatsApp Business:</h3>
          <p className="text-gray-300">+91 9922430684</p>
        </div>

        {/* Address Info */}
        <div>
          <div className="flex justify-center md:justify-start mb-4">
            <FaMapMarkerAlt className="text-cyan-400 text-4xl" />
          </div>
          <h3 className="uppercase text-sm tracking-widest text-gray-400 mb-2">Subak Offset LLP</h3>
          <h4 className="font-semibold text-lg mb-1">Factory & Office Address:</h4>
          <p className="text-gray-300 leading-relaxed">
            1243/36 B Ward, Charne Engineering Works,<br />
            Shivaji Udyamnagar, Kolhapur – 416008
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Subak Offset LLP. All rights reserved.
      </div>
    </section>
  );
};

export default ContactUsSection;


