import React from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';

const Shop = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-4xl flex items-center justify-between gap-4">

        {/* Search Input */}
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-black text-white px-5 flex items-center justify-center rounded-r-md hover:bg-gray-800">
            <FiSearch className="text-lg" />
          </button>
        </div>

        {/* Login and Cart Icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
            <FiUser className="text-xl" />
            <span className="text-sm font-medium">Login</span>
          </div>
          <FiShoppingCart className="text-xl cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
