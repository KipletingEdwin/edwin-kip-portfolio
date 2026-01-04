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
    <section id="projects" className="max-w-6xl mx-auto px-10 py-12 ">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
            {/* IMAGE + OVERLAY */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* OVERLAY BUTTONS */}
              <div
                className="absolute inset-0 bg-black/60 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                    transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Link
                  to={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg 
                   hover:bg-orange-600 transition"
                >
                  Live Demo
                </Link>

                <Link
                  to={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg 
                   hover:bg-gray-200 transition"
                >
                  Source Code
                </Link>
              </div>
            </div>

            {/* TITLE + LABEL */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{project.label}</p>
              <span className="text-xs text-orange-500 font-medium block mt-2">
                {project.brand}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
