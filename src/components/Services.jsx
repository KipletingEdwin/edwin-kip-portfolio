import React from "react";
import Services_Data from "../data/services_data";
import { motion } from "motion/react"

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

const Services = () => {
  return (
    <motion.section
     variants={container} 
     initial="hidden"
     animate="visible"
     id="services" 
     className="py-20 px-6 md:px-12">
      <motion.div 
      variants={item}
      className="flex items-center justify-center flex-col">
        <h1 className="text-3xl py-3 font-bold">Services</h1>
        <p className="text-2xl">
          Creative intuitive and user-friendly designs through ux research
        </p>
      </motion.div>

      <motion.div
      variants={item}
       className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Services_Data.map((service, index) => (
          <motion.div
          whileHover={{scale: 1.08}}
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg 
                        flex flex-col items-center text-center 
                        hover:shadow-xl transition-all duration-300 cursor-pointer ease-out"
                        //transition-all duration-300 ease-out hover:shadow-xl hover:scale-[1.02]

          >
            <div className="text-orange-500 text-5xl mb-4">{service.icon}</div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {service.s_name}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {service.s_desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
