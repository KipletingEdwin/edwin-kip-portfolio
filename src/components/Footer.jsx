import React from "react";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const links = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About Me", to: "about" },
    { name: "Portfolio", to: "projects" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact Me", to: "contact" },
  ];

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="bg-gray-900 text-white py-10 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Logo */}
        <motion.h1
          custom={0}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text cursor-pointer"
        >
          Edwin
        </motion.h1>

        {/* Navigation */}
        <motion.nav
          custom={1}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          {links.map((link, index) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-orange-500 transition cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          custom={2}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-6 text-xl text-gray-400"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaDribbble />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaBehance />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={3}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400"
        >
          <p>
            Email:{" "}
            <a href="mailto:kipletingedwin4@gmail.com" className="hover:text-orange-500">
              kipletingedwin4@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Credit */}
        <motion.p
          custom={4}
          variants={variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xs text-gray-500 mt-4"
        >
          Designed by <span className="text-orange-500">@Edwin Kipleting</span>
        </motion.p>
      </div>
    </footer>
  );
}
