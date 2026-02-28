"use client";

import React, { useState } from "react";
import Map from "./Map";

const Conta = () => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setResponseMessage(
      "Thank you! We’ll get back to you within 24–48 hours."
    );
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setResponseMessage(
      "Booking request received! Our team will confirm availability soon."
    );
  };

  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      
      
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Get in Touch With Us
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Whether you have questions about availability or need help planning your stay,
        we’re here to assist you. You can email us, call directly, or fill out any form
        below — we’ll reply promptly.
      </p>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

    
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            General Contact Form
          </h2>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Room Booking Form
          </h2>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
                required
              />
              <input
                type="date"
                className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
                required
              />
            </div>

            <textarea
              rows="3"
              placeholder="Special Requests"
              className="w-full border-gray-300 rounded-md p-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>

      </div>

      
      {responseMessage && (
        <p className="mt-6 text-center text-green-700 font-semibold">
          {responseMessage}
        </p>
      )}

    
    <Map/>

    </div>
  );
};

export default Conta;