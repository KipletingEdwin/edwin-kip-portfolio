import React from "react";
import { motion } from "framer-motion";
import projectsData from "../../data/projectsData";
import SectionHeader from "../common/SectionHeader";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className=" mx-auto  px-2 py-12 md:px-12 ">
      {/* container mx-auto px-2 grid md:grid-cols-2 lg:grid-cols-3 gap-8 */}
      {/* Header */}
      <SectionHeader
        title="Projects"
        subtitle="Here are some of the projects I have worked on"
      />

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2"
      >
        {projectsData.map((project) => (
          <motion.div
  key={project.id}
  variants={fadeUp}
  whileHover={{
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
  }}
  whileTap={{ scale: 0.98 }}
  className="bg-[#1a1a1a] rounded-xl shadow overflow-hidden border border-gray-800"
>
  {/* IMAGE */}
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover"
  />

  {/* TITLE + LABEL */}
  <div className="p-5">
    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    <p className="text-sm text-gray-400 mt-1">{project.label}</p>
    <span className="text-xs text-orange-500 font-medium block mt-2">
      {project.category}
    </span>

    {/* BUTTONS */}
    <div className="flex items-center gap-3 mt-4">
      <Link
        to={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg 
                   hover:bg-orange-600 transition w-full text-center"
      >
        Live Demo
      </Link>

      <Link
        to={project.code}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg 
                   hover:bg-gray-200 transition w-full text-center"
      >
        Source Code
      </Link>
    </div>
  </div>
</motion.div>

        ))}
        
      </motion.div>
    </section>
  );
}
