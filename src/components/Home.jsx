import React from "react";
import heroImg from "../assets/profile_img.jpg";
import { motion } from "framer-motion";
//import { motion } from "motion/react"

// Fade + Stagger Animation
const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

// Child fade animation
const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 bg-dark overflow-hidden">

      {/* LEFT TEXT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 max-w-xl"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Edwin
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          A passionate frontend developer creating smooth, modern, and interactive
          user experiences using React, TailwindCSS, and animations.
        </motion.p>

        {/* BUTTONS */}
        <motion.div variants={item} className="flex gap-4 mt-3">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px #ff7a00" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-white transition-all neon-glow"
          >
            Explore My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white rounded-lg font-bold transition-all"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={item}
          className="grid grid-cols-3 gap-6 mt-10 max-w-md"
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "20+", label: "Projects" },
            { num: "10+", label: "Clients" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center p-4 rounded-xl border border-gray-700 bg-[#161616] hover:border-orange-500 transition-all shadow-lg hover:shadow-orange-500/40"
            >
              <h3 className="text-3xl font-bold text-orange-400">{stat.num}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT - IMAGE WITH NEON GLOW + FLOAT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative mt-16 md:mt-0"
      >
        {/* Floating Animation */}
        <motion.img
          src={heroImg}
          alt="profile"
          className="w-[320px] md:w-[420px] rounded-2xl object-cover shadow-2xl neon-border"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
