import React from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Here are some of the projects I have worked on
        </p>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow overflow-hidden"
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{project.label}</p>
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
