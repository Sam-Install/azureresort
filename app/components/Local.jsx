"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Local = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">

      
      <h1 className="text-center text-3xl font-bold mb-10">
        Local Attractions
      </h1>

      
      <div className="mt-8 text-center text-gray-700 space-y-4">
        <p>
          Discover the best of Diani Beach — a gorgeous stretch of Indian Ocean coastline known for its clear waters, lush nature, and world-class outdoor experiences
        </p>
        <p>
          From natural wonders to cultural canoe tours and marine life adventures, there’s something here for every traveler.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">

        
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/map.jpeg"
              alt="Map of Africa Pool"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">Map of Africa Pool</h2>
          <p className="text-gray-600">
            A unique natural tidal rock pool shaped like the map of Africa, known for its turquoise water and scenic setting — perfect for swimming and snorkeling near Diani Beach
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/mangroove.jpeg"
              alt="Mangroves & Creek Sunset"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">Mangroves & Creek Sunset</h2>
          <p className="text-gray-600">
            Experience serene canoe tours at sunset through mangrove estuaries where river meets sea, full of birdlife and calm natural beauty
          </p>
        </motion.div>

        
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/glass.jpeg"
              alt="Glass Bottom Boat Ride"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">Glass-Bottom Boat Ride</h2>
          <p className="text-gray-600">
            Enjoy a cruise on a glass-bottom boat to see vibrant coral, fish, and other marine life beneath your feet — a fun and family-friendly way to explore the ocean
          </p>
        </motion.div>

    
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-48 rounded-lg shadow-md overflow-hidden">
            <Image
              src="/snake.jpeg"
              alt="Wildlife & Nature Spot"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4">Wildlife & Nature Spot</h2>
          <p className="text-gray-600">
            Explore nearby natural areas where local wildlife — including reptiles and birds — can be observed in their natural habitat, perfect for nature lovers.
          </p>
        </motion.div>

      </div>

    </section>
  );
};

export default Local;