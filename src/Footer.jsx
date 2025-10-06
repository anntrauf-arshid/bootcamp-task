import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto space-y-4 md:space-y-0">
        
        {/* 👇 Logo / Name */}
        <h2 className="text-xl font-semibold text-yellow-400">
          Anntrauf Arshid
        </h2>

        {/* 👇 Navigation Links */}
        <ul className="flex space-x-6 text-gray-300">
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            About
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Projects
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Skills
          </li>
          <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* 👇 Social Icons */}
        <div className="flex space-x-5 text-yellow-400 text-2xl">
          <a href="https://github.com" target="_blank" className="hover:scale-110 transition">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:anntrauf@example.com" className="hover:scale-110 transition">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* 👇 Copyright */}
      <p className="text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Anntrauf Arshid. All Rights Reserved.
      </p>
    </footer>
  );
}
