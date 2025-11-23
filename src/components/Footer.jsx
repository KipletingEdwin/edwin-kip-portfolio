import React from "react";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          Edwin
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
          <a href="#services" className="hover:text-orange-500 transition">Services</a>
          <a href="#about" className="hover:text-orange-500 transition">About me</a>
          <a href="#portfolio" className="hover:text-orange-500 transition">Portfolio</a>
          <a href="#testimonials" className="hover:text-orange-500 transition">Testimonials</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact me</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-400">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaDribbble />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
            <FaBehance />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-400">
          <p>Email: <a href="mailto:zahooralishah44@gmail.com" className="hover:text-orange-500">kipletingedwin4@gmail.com</a></p>
          <p>Phone: <a href="tel:+923555313486" className="hover:text-orange-500">+923555313486</a></p>
        </div>

        {/* Credit */}
        <p className="text-xs text-gray-500 mt-4">
          Designed by <span className="text-orange-500">@Edwin Kipleting</span>
        </p>
      </div>
    </footer>
  );
}
