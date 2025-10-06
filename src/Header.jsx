import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "./assets/profile.jpg";
export default function Header() {
  return (
    <header
      className="relative text-white flex flex-col items-center justify-center text-center h-screen px-6"
      style={{
        backgroundImage: `url(${profile})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-yellow-400">Anntrauf Arshid</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer 💻",
            2000,
            "React Enthusiast ⚛️",
            2000,
            "UI/UX Learner 🎨",
            2000,
            "Creative Designer ✨",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-yellow-400 text-2xl md:text-3xl font-semibold mb-8"
        />

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          I build visually appealing, responsive, and performance-driven websites that make ideas come alive.
        </p>

        <div className="flex space-x-4 justify-center">
          <button className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-200">
            View Projects
          </button>
          <button className="border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}
