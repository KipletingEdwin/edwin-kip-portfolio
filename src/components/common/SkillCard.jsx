import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon: Icon, name, description }) => {
  return (
<motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 24px rgba(255,122,0,0.25)",
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="p-6 bg-[#111] border border-gray-800 rounded-xl 
                 hover:border-orange-500 transition group cursor-pointer"
    >
      <Icon
        className="text-orange-500 mb-4 group-hover:scale-110 transition"
        size={32}
      />
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SkillCard;
