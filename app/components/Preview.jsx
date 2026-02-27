"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    description: "Modern and spacious room with scenic views.",
    img: "/rooms1.jpeg",
  },
  {
    id: 2,
    title: "Standard Room",
    description: "Comfortable room with all basic amenities.",
    img: "/rooms2.jpg",
  },
  {
    id: 3,
    title: "Suite",
    description: "Luxury suite with living area and premium features.",
    img: "/rooms3.jpg",
  },
  {
    id: 4,
    title: "Family Room",
    description: "Spacious room perfect for families and larger groups.",
    img: "/rooms4.jpeg",
  },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

export default function Preview() {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Explore Our Rooms
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 mb-8 max-w-2xl"
      >
        Discover our variety of rooms designed for comfort, style, and
        unforgettable stays. Whether you’re here for a relaxing getaway or
        a business trip, we have something just for you.
      </motion.p>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          >
            <div className="relative w-full h-48">
              <Image
                src={room.img}
                alt={room.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {room.title}
              </h3>
              <p className="text-gray-600 mt-2">{room.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <Link
          href="/rooms"
          className="inline-block bg-blue-400 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-500 transition"
        >
          See More Rooms
        </Link>
      </motion.div>
    </section>
  );
}