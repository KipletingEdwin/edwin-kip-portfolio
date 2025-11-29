import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Handle scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = ["home", "about", "services", "projects", "contact"];
      sections.forEach((section) => {
        const elem = document.getElementById(section);
        if (elem) {
          const top = elem.offsetTop - 100;
          const bottom = top + elem.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 px-6 py-4 flex justify-between items-center border-b transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-white/10 shadow-md"
          : "bg-dark/80 border-white/5"
      }`}
    >
      {/* Logo */}
      <div
        className="text-3xl font-extrabold cursor-pointer"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <span className="bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
          Edwin
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium text-lg">
        {links.map((link) => (
          <li key={link.to}>
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80} // adjust for navbar height
              className={`cursor-pointer transition hover:text-white ${
                active === link.to ? "text-white font-bold" : ""
              }`}
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        className="hidden md:block px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer"
      >
        Let's Connect
      </ScrollLink>

      {/* Mobile toggle */}
      <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
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
        {links.map((link) => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
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
          smooth={true}
          duration={500}
          offset={-80}
          className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer"
          onClick={() => setOpen(false)}
        >
          Let's Connect
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
