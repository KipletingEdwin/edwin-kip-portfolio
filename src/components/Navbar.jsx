import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-dark/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-white/5">
      
      {/* Logo */}
      <Link to="/" className="text-3xl font-extrabold">
        <span className="bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Edwin
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium text-lg">
        <li>
          <Link to="/" className="hover:text-white transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-white transition">Services</Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-white transition">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link
        to="/contact"
        className="hidden md:block px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
      >
        Let's Connect
      </Link>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-gray-300"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-dark md:hidden flex flex-col items-center gap-6 py-6 text-lg text-gray-300 font-medium transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)} className="hover:text-white transition">Home</Link>
        <Link to="/about" onClick={() => setOpen(false)} className="hover:text-white transition">About</Link>
        <Link to="/services" onClick={() => setOpen(false)} className="hover:text-white transition">Services</Link>
        <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-white transition">Projects</Link>
        <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-white transition">Contact</Link>

        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition"
        >
          Let's Connect
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
