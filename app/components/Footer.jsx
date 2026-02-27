"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 sm:px-12 lg:px-24">
      
    
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

        
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Azure Palm Beach Resort
          </h2>
          <p className="text-sm leading-relaxed">
            Azure Palm Beach Resort is a premier coastal retreat offering
            luxurious comfort, breathtaking ocean views, and unforgettable
            experiences. Our resort welcomes guests with world-class service,
            premium amenities, and a passion for hospitality. Whether you’re
            unwinding by the sea, exploring nearby attractions, or discovering
            local culture, we provide an exceptional base for your dream
            getaway. Come experience comfort, elegance, and serenity with us.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/rooms" className="hover:text-white">Rooms</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/gallery" class= "hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +254 700 000 000
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Email:</span> info@azurepalmbeach.com
          </p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Address:</span> Shanzu Road, Mombasa, Kenya
          </p>

          
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>
        </div>
      </div>

    
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Azure Palm Beach Resort. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;