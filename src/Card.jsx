import React from "react";

export default function Card({ image, title, description }) {
  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-72">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}
