// src/pages/Shop.jsx
import React, { useState } from 'react';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import CategoryMenu from '../components/CategoryMenu';

const products = [
  { id: 1, name: 'Notebook (Single Line)', price: 50 },
  { id: 2, name: 'Diary 2025', price: 120 },
  { id: 3, name: 'Drawing Book', price: 90 },
  // Add more products as needed
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Top Bar */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 mb-10">
        
        {/* Category Sidebar Toggle */}
        <CategoryMenu />

        {/* Search Bar */}
        <div className="flex flex-1 ml-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-black text-white px-5 flex items-center justify-center rounded-r-md hover:bg-gray-800">
            <FiSearch className="text-lg" />
          </button>
        </div>

        {/* Login & Cart */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
            <FiUser className="text-xl" />
            <span className="text-sm font-medium">Login</span>
          </div>
          <FiShoppingCart className="text-xl cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
