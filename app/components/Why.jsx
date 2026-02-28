"use client";

import Link from "next/link";
import React from "react";
import { FaSwimmer, FaConciergeBell, FaMapMarkerAlt } from "react-icons/fa";

const Why = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <h1 className="text-center text-3xl font-bold mb-12">
        Why Book With Us
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

    
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
          <FaSwimmer className="text-4xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Great Amenities
          </h2>
          <p className="text-gray-600">
            We offer premium facilities like refreshing pools, relaxing lounges, and comfortable spaces so you can unwind and enjoy every moment.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
          <FaConciergeBell className="text-4xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Friendly Service
          </h2>
          <p className="text-gray-600">
            Our team is dedicated to making your stay perfect with attentive and personalized service from arrival to departure.
          </p>
        </div>

        
        <div className="flex flex-col items-center text-center p-6 border rounded-lg shadow-md hover:shadow-lg transition">
          <FaMapMarkerAlt className="text-4xl text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Prime Location
          </h2>
          <p className="text-gray-600">
            We’re located near top attractions, beautiful beaches, and local hotspots so you can explore easily and confidently.
          </p>
        </div>

      </div>

      
      <div className="text-center mt-12">
    <Link href="/room">  
    
    <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition">
          Book Your Stay
        </button>
    
    </Link>    
      </div>
    </section>
  );
};

export default Why;