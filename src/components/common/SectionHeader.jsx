import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${alignment} mb-12`}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h1>

      {/* Accent underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="h-[3px] bg-orange-500 rounded-full mt-2 mb-4"
      />

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
