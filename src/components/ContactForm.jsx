import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-16 px-4 md:px-20" style={{ backgroundImage: `url('/your-bg-image.jpg')` }}>
      <div className="bg-black bg-opacity-50 p-8 md:p-16 border-4 border-gray-300 max-w-6xl mx-auto rounded-md">
        <div className="md:flex md:justify-between md:items-start text-white">
          {/* Left Side Text */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 border-b-4 border-cyan-400 inline-block">Connect with us</h2>
            <p className="text-lg font-semibold mt-4">
              24 Hours for a quote! 72 Hours for a print prototype
            </p>
          </div>

          {/* Form Section */}
          <form className="md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-2 text-black rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full px-4 py-2 text-black rounded focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-2 text-black rounded focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 text-black rounded focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

