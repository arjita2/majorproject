import React from 'react';

function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-2 border border-blue-300 rounded-xl px-3 py-1 bg-white focus-within:ring-2 focus-within:ring-sky-500">
      <i className='bx bx-search text-xl text-gray-500'></i>
      <input
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent placeholder-gray-500"
      />
    </div>
  );
}

export default SearchBar;
