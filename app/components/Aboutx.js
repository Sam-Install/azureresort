"use client";

import Image from "next/image";
import React from "react";

const Aboutx = () => {
  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      
    
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Azure Palm Beach Resort In Words
      </h1>
      <h2 className="text-xl text-gray-600 mb-8">
        A haven of comfort, style and unforgettable experiences
      </h2>

      <div className="flex flex-col sm:flex-row gap-8">
        
    
        <div className="w-full sm:w-1/2 space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            About Azure Palm Beach Resort
          </h1>
          <h2 className="text-gray-700">
            At Azure Palm Beach Resort, we offer an idyllic escape where every
            guest can relax and unwind in comfort. Our location — nestled by
            pristine sands and ocean breezes — brings you closer to peace,
            calm, and timeless memories.
          </h2>
          <h3 className="text-gray-700">
            From beautifully appointed rooms to world-class service and
            unforgettable seaside views, every stay promises comfort, luxury
            and joy. Whether you're here for a serene getaway or an adventure
            with family, our resort has everything you need for a dreamy stay.
          </h3>
        </div>

        
        <div className="relative w-full sm:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/image2.jpeg"
            alt="Azure Palm Beach Resort overview"
            fill
            className="object-cover"
          />
        </div>

        
        <div className="w-full sm:w-1/2 mt-8 sm:mt-0 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Word From Our CEO
          </h1>
          <p className="text-gray-700">
            “Welcome to Azure Palm Beach Resort! Our mission is to make every
            guest feel exceptional. We believe in warm hospitality, thoughtful
            service, and creating moments that last a lifetime. At our resort,
            your comfort is our priority, and your memories are our purpose.”
          </p>

          
          <div className="relative w-full h-100 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/ceo.jpeg"
              alt="CEO of Azure Palm Beach Resort"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutx;