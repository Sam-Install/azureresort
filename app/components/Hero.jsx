"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Welcome to Our Service",
    subtitle: "We make dreams come true",
    text: "Experience excellence and comfort in every step.",
    img: "/image2.jpeg",
  },
  {
    id: 2,
    title: "Discover New Horizons",
    subtitle: "Adventure Awaits",
    text: "Let’s take you where your heart wants to go.",
    img: "/hero100.jpeg",
  },
  {
    id: 3,
    title: "Your Journey Starts Here",
    subtitle: "Begin Today",
    text: "Reliable, safe, and unforgettable experiences.",
    img: "/hero200.jpeg",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`
            absolute inset-0 transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.img})` }}
          ></div>

          
          <div className="absolute inset-0 bg-black opacity-60"></div>

          
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
            <h2 className="text-2xl mb-2">{slide.subtitle}</h2>
            <p className="text-lg max-w-xl mb-6">{slide.text}</p>

            {slide.id === 1 && (
              <div className="flex gap-4">
              <Link href="/about">  <button className="bg-green-400 hover:bg-green-700 px-6 py-2 rounded text-lg font-medium">
                  Learn More
                </button> </Link> 
              <Link href="/contact"> <button className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded text-lg font-medium">
                  Book Now
                </button> </Link>  
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;