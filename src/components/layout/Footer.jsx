import React, { useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="text-white py-14 px-10 bg-dark border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Logo */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-3xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text cursor-pointer"
        >
          Edwin
        </motion.h1>

        {/* Navigation */}
        <motion.nav
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          {links.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.to}
              smooth
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
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center gap-6 text-gray-400"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/kipleting-edwin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/KipletingEdwin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <Github size={22} />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm text-gray-400"
        >
          <p>
            Email:{" "}
            <a
              href="mailto:kipletingedwin4@gmail.com"
              className="hover:text-orange-500"
            >
              kipletingedwin4@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Credit */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-xs text-gray-500 pt-4"
        >
          Designed by
          <span className="text-orange-500">@Edwin Kipleting</span>
        </motion.p>
      </div>
    </footer>
  );
}
