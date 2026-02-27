"use client";

import React from "react";

const Map = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="flex flex-col sm:flex-row gap-8 items-center">

        
        <div className="w-full sm:w-1/2 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

        
          <div>
            <h3 className="font-semibold text-lg">Location</h3>
            <p>Azure Palm Beach Resort</p>
            <p>Shanzu Road, Mombasa, Kenya</p>
          </div>

          
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600">+254 700 000 000</p>
          </div>


          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600">info@azurepalmbeach.com</p>
          </div>
        </div>

        
        <div className="w-full sm:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Azure Palm Beach Resort Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31888.123456789!2d39.728123!3d-4.044567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401c1234567890%3A0xabcdef1234567890!2sAzure%20Palm%20Beach%20Resort!5e0!3m2!1sen!2ske!4v1699999999999"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Map;