
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  WifiIcon,
  TvIcon,
  BoltIcon,
  CakeIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const amenities = [
  { icon: WifiIcon, text: "Free High-Speed Wi-Fi" },
  { icon: TvIcon, text: "Flat-Screen TV & Entertainment" },
  { icon: BoltIcon, text: "Air Conditioning / Climate Control" },
  { icon: CakeIcon, text: "Mini-Fridge & Coffee / Tea Kit" },
  { icon: SparklesIcon, text: "Outdoor Swimming Pool" },
  { icon: HeartIcon, text: "Relaxing Spa & Wellness" },
  { icon: UserGroupIcon, text: "Concierge Services" },
  { icon: CheckBadgeIcon, text: "Free Parking" },
];

const Amenities = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-800 mb-4"
      >
        Our Amenities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 max-w-3xl mx-auto mb-8"
      >
        To make your stay truly unforgettable, we offer a curated range of
        amenities — from in-room comforts to leisure experiences.
      </motion.p>

      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {amenities.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center text-left space-x-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Icon className="w-7 h-7 text-green-400" />
              <span className="text-lg text-gray-700">{item.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center mt-6"
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 text-sm px-8 py-2 rounded text-white"
          >
            Book Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Amenities;