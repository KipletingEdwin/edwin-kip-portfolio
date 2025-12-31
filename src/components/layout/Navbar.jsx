import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const links = [
  { name: "Home", to: "home" },
  { name: "Services", to: "services" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((l) => l.to);
      const scrollPos = window.scrollY + 120; // offset for navbar height
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={"w-full fixed top-0 left-0 z-50 px-10 py-6 flex justify-between items-center bg-dark border-b border-white/10 transition-all duration-300 "}>
      {/* Logo */}
      <div className="text-3xl font-extrabold cursor-pointer" >
        <Link to="/" className="bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text" >Edwin</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium text-lg">
        {links.map((link) => (
          <li key={link.to}>
            <ScrollLink
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer transition-all duration-300 hover:text-white ${
                active === link.to ? "text-white font-bold opacity-100" : "opacity-60"
              }`}
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <ScrollLink
        to="contact"
        smooth
        duration={500}
        offset={-80}
        className="hidden md:block px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer"
      >
        Let's Connect
      </ScrollLink>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-gray-300"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <X size={32} className="transition-transform duration-300 transform hover:rotate-90"
          />

        ) : (
          <Menu size={32} className="transition-transform duration-300 transform hover:rotate-90"
          />

        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 overflow-hidden transition-all duration-500 ${
          open
            ? "max-h-[400px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-6 p-6 text-gray-300 text-lg">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className={`cursor-pointer hover:text-white transition ${
                active === link.to ? "text-white font-bold" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}

          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Let's Connect
          </ScrollLink>
        </div>
      </div>


    </nav>
  );
}
