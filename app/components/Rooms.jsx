"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    title: "Deluxe Room",
    description:
      "Our Deluxe Room offers a comfortable king-size bed, modern bathroom, free WiFi, air conditioning, and a private balcony with beautiful views.",
    price: "Ksh 6,500 / Night",
    images: ["/rooms1.jpeg", "/rooms2.jpg", "/rooms3.jpg"],
  },
  {
    id: 2,
    title: "Executive Suite",
    description:
      "Spacious Executive Suite featuring a separate living area, premium bedding, smart TV, mini bar, and a luxurious bathroom setup.",
    price: "Ksh 9,000 / Night",
    images: ["/rooms2.jpg", "/rooms1.jpeg", "/rooms3.jpg"],
  },
  {
    id: 3,
    title: "Family Room",
    description:
      "Perfect for families, this room includes two large beds, a seating area, fast WiFi, and ample space for relaxation and comfort.",
    price: "Ksh 11,000 / Night",
    images: ["/rooms3.jpg", "/rooms2.jpg", "/rooms1.jpeg"],
  },
  {
    id: 4,
    title: "Single Room",
    description:
      "Cozy Single Room with comfortable bedding, strong WiFi, private bathroom, and smart TV.",
    price: "Ksh 7,000 / Night",
    images: ["/hero100.jpeg", "/hero200.jpeg", "/hero87.jpeg"],
  },
];

const Rooms = () => {
  const [bookingRoom, setBookingRoom] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our Rooms
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onBook={() => setBookingRoom(room)} />
        ))}
      </div>

      {bookingRoom && (
        <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} />
      )}
    </section>
  );
};

const RoomCard = ({ room, onBook }) => {
  const [mainImage, setMainImage] = useState(room.images[0]);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:shadow-2xl">
      <div className="relative w-full h-64 md:h-72 lg:h-80 bg-gray-200">
        <Image src={mainImage} alt={room.title} fill className="object-cover" />
      </div>

      <div className="flex gap-3 justify-center py-3 bg-gray-100">
        {room.images.map((img, i) => (
          <div
            key={i}
            className="relative w-24 h-16 cursor-pointer rounded-lg border-2 border-transparent hover:border-green-600 transition"
            onClick={() => setMainImage(img)}
          >
            <Image src={img} alt={`${room.title} thumb ${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">{room.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
        <p className="text-xl font-bold text-green-600">{room.price}</p>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={onBook}
            className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
          >
            Book Now
          </button>

          <a
            href={`https://wa.me/254753879163?text=Hello, I would like to book the ${room.title}.`}
            target="_blank"
            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const BookingModal = ({ room, onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-blue-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          Booking Form — {room.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              name="secondName"
              placeholder="Second Name"
              value={form.secondName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="checkIn"
              placeholder="Check-In Date"
              value={form.checkIn}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <input
              type="date"
              name="checkOut"
              placeholder="Leaving Date"
              value={form.checkOut}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={handleChange}
            min="1"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rooms;