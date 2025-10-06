import React from "react";
import "./App.css";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-lg">
        <div className="text-2xl font-bold tracking-wide">Anntrauf</div>

        <ul className="flex space-x-6 text-lg font-medium">
          <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            Projects
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            Skills
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
