"use client";

import React from "react";
import { FaPercent, FaConciergeBell, FaGift, FaSnowflake, FaUmbrellaBeach } from "react-icons/fa";

const Offers = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-100">
      
      {/* Section Title */}
      <h1 className="text-center text-3xl font-bold mb-10">
        Our Special Offers
      </h1>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Discount Offer */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaPercent className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Early Bird Savings</h2>
          <p className="text-gray-600">
            Book your stay in advance and unlock exclusive discounts on room rates — perfect for smart planners who want the best value.
          </p>
        </div>

        {/* Seasonal/Bundle */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaUmbrellaBeach className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Seasonal Getaway Deal</h2>
          <p className="text-gray-600">
            Take advantage of our seasonal promotions with special pricing and added perks like beach access & refreshments — limited time only.
          </p>
        </div>

        {/* Bundle Package */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaGift className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">All-Inclusive Package</h2>
          <p className="text-gray-600">
            Enjoy our best value package including meals, drinks, and resort activities all in one price — a worry-free getaway experience.
          </p>
        </div>

        {/* Perks Offer */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaConciergeBell className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Exclusive Member Perks</h2>
          <p className="text-gray-600">
            Sign up for special member rates and benefits like late checkout, complimentary breakfast, and upgrades when available.
          </p>
        </div>

        {/* Winter/Seasonal Offer */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaSnowflake className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Seasonal Chill Retreat</h2>
          <p className="text-gray-600">
            Enjoy a cooler weather getaway with special rates and seasonal treats — perfect for holiday breaks or winter escapes.
          </p>
        </div>

        {/* Free Extras/Add-Ons */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
          <FaGift className="text-4xl text-indigo-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Welcome Extras</h2>
          <p className="text-gray-600">
            Book direct and enjoy complimentary extras like welcome drinks, spa credits, or activity vouchers — just our way of saying thanks!
          </p>
        </div>

      </div>

    </section>
  );
};

export default Offers;