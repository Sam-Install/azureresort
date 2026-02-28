import React from "react";
import Image from "next/image";

const Abouts = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      
      <div className="flex flex-col sm:flex-row items-center gap-10">
        
        
        <div className="w-full sm:w-1/2 relative h-[350px] sm:h-[450px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/abouts.jpg"  
            alt="About Azure Palm Beach Resort"
            fill
            className="object-cover"
          />
        </div>

        
        <div className="w-full sm:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            About Azure Palm Beach Resort
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Nestled along the beautiful coastline, Azure Palm Beach Resort 
            offers a perfect blend of luxury, comfort, and relaxation. 
            Our goal is to provide unforgettable experiences through 
            exceptional hospitality and world-class amenities.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Whether you're here for a romantic getaway, a family vacation, 
            or a peaceful retreat, we ensure every moment is special. 
            Enjoy breathtaking ocean views, elegant rooms, and personalized service.
          </p>

          <button className="mt-4 bg-blue-300 hover:bg-blue-600  text-white px-6 py-3 rounded-md font-medium transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Abouts;