import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.ico" // Replace with your actual logo path
            alt="CollegeTips Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            CollegeTips.in
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Programs
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-600">
          <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
          <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
          <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
          <a href="#"><FaYoutube className="hover:text-red-600" /></a>
        </div>
      </div>

      {/* Bottom green border */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-green-400 to-emerald-400"></div>
    </header>
  );
};

export default Header;
