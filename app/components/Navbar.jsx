"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="absolute top-0 left-0 w-full z-40 flex flex-col sm:flex-row justify-between items-center py-5 px-4 bg-transparent">
      
      
      <h1 className="text-lg font-semibold text-white">Azure Palm Beach Resort</h1>

      
      <ul className="hidden sm:flex gap-6 text-orange-400">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Rooms</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      
      <div className="sm:hidden mt-2" onClick={toggleMenu}>
        {isOpen ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <GiHamburgerMenu className="text-2xl" />
        )}
      </div>

      
      {isOpen && (
        <ul className="sm:hidden flex flex-col justify-center items-center gap-4 mt-4 text-gray-700 w-full text-center bg-white">
          <li className="w-full"><a href="#" onClick={toggleMenu}>Home</a></li>
          <li className="w-full"><a href="#" onClick={toggleMenu}>About Us</a></li>
          <li className="w-full"><a href="#" onClick={toggleMenu}>Rooms</a></li>
          <li className="w-full"><a href="#" onClick={toggleMenu}>Gallery</a></li>
          <li className="w-full"><a href="#" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;