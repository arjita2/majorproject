// src/components/CategoryMenu.jsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stationeryItems = [
    "Notebooks (single line, double line, graph, etc.)",
    "Long books",
    "Diaries",
    "Planners / Organizers",
    "School workbooks",
    "Drawing books",
    "Registers (accounting, attendance, etc.)",
    "Answer sheets (customized for exams)",
    "Memo pads / Notepads",
    "Sticky notes (custom printed)",
    "Envelopes (custom sizes, branded)",
    "File folders",
    "Bill books (with carbon copy pages)",
    "Letterheads",
    "Desk calendars",
    "Wall calendars",
    "Wrapping sheets",
    "Chart papers",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border p-2 bg-gray-800 text-white rounded"
      >
        <FaBars />
        All
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-64 bg-white shadow-lg border rounded z-50 p-4 max-h-[500px] overflow-y-auto">
          <div>
            <h2 className="font-bold mb-2">Stationery</h2>
            <ul className="mb-4 space-y-5">
              {stationeryItems.map((item, index) => (
                <li key={index} className="border-b pb-1 text-sm hover:text-blue-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-bold mb-2">Help & Settings</h2>
            <ul className="space-y-5 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Your Account</li>
              <li className="hover:text-blue-600 cursor-pointer">Customer Service</li>
              <li className="hover:text-blue-600 cursor-pointer">Sign In</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;

