import React, { useRef } from "react";
import Services_Data from "../data/services_data";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Services = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-120px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-6 md:px-12"
    >
      {/* Header */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-center justify-center flex-col text-center mb-12"
      >
        <h1 className="text-3xl py-3 font-bold">Services</h1>
        <p className="text-2xl text-gray-300 max-w-2xl">
          Creative intuitive and user-friendly designs through UX research
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2"
      >
        {Services_Data.map((service, index) => {
          const anim = index % 2 === 0 ? fadeLeft : fadeRight;

          return (
            <motion.div
              key={index}
              variants={anim}
              whileHover={{
                scale: 1.06,
                y: -6,
                transition: { type: "spring", stiffness: 200 },
              }}
              className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg 
                         flex flex-col items-center text-center 
                         hover:shadow-orange-500/10 transition-all 
                         duration-300 cursor-pointer"
            >
              <div className="text-orange-500 text-5xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.s_name}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.s_desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
