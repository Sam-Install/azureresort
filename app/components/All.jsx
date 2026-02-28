"use client";

import React from "react";
import Image from "next/image";

const galleryImages = [
  "/hero100.jpeg",
  "/hero200.jpeg",
  "/hero87.jpeg",
  "/abouts.jpg",
  "/Hero88.jpeg",
  "/image1.jpg",
  "/image2.jpeg",
  "/mangroove.jpeg",
  "/map.jpeg",
  "/rooms1.jpeg",
  "/rooms2.jpg",
  "/rooms3.jpg",
  "/rooms4.jpeg"

];

const All = () => {
  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Gallery
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Browse through stunning moments from Azure Palm Beach Resort — from
        luxurious rooms to scenic views and unforgettable experiences.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative w-full h-56 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default All;