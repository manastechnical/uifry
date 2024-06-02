"use client";
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Ready To Get Started?</h2>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">Download App</button>
    </section>
  );
};

export default Contact;
