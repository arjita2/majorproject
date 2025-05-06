import React from 'react';
import ContactForm from '../components/ContactForm';
import contactBanner from '../assets/CONTACT-USS.png';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="pt-8 px-4">
      <div className="relative w-full max-h-[400px] overflow-hidden rounded-md mb-8 shadow-md">
        {/* Animated overlay */}
        <motion.div
          initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
          animate={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-10"
        />

        {/* Image with transition */}
        <motion.img
          src={contactBanner}
          alt="Contact Us"
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactUs;


