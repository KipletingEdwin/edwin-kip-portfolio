import React, { useRef } from "react";
import Services_Data from "../../data/services_data";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import SectionHeader from "../common/SectionHeader";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const Services = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section id="services" ref={sectionRef} className="py-2 px-10 md:px-12">
      {/* Header */}
      <SectionHeader
        title="Services"
        subtitle="Creative intuitive and user-friendly designs through UX research"
      />

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2"
      >
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 24px rgba(255,122,0,0.25)",
            }}
            whileTap={{scale: 0.97}}
            transition={{ duration: 0.25 }}
            className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg 
                 flex flex-col items-center text-center 
                 hover:shadow-orange-500/10  hover:border-orange-500  transition-all 
                 duration-300 cursor-pointer"
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
    </section>
  );
};

export default Services;
