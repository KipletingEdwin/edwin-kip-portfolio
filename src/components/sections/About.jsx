import React, { useRef } from "react";
import profile_img from "../../assets/images/profile_img.jpg";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import SectionHeader from "../common/SectionHeader";
import SkillCard from "../common/SkillCard";
import Skills_Data from "../../data/skills_data";

// Animation variants
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const skillCardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  // Parallax image
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section id="about" ref={sectionRef} className="text-white py-20 px-6 md:px-12">
      <SectionHeader
        title="About Me"
        subtitle="User Interface, User Experience, and Graphic Designer"
      />

      {/* MAIN GRID */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT — IMAGE */}
        <motion.div variants={fadeLeft} className="flex justify-center">
          <motion.div
            ref={parallaxRef}
            style={{ y: parallaxY }}
            variants={fadeUp}
            className="bg-[#1A1A1A] rounded-t-[200px] w-[320px] md:w-[380px] h-[480px] md:h-[520px] overflow-hidden"
          >
            <motion.img
              src={profile_img}
              alt="Profile"
              className="w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div> 

        {/* RIGHT — TEXT */}
        <motion.div variants={fadeRight} className="space-y-6">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a passionate and detail-oriented UI/UX Designer dedicated to crafting seamless,
            user-friendly digital experiences. With a deep understanding of user behavior, I design
            interfaces that are visually appealing, functional, and accessible.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I have worked on diverse digital products—websites, apps, and systems—always aiming to
            balance business needs with user-centered design. Every design is backed by research,
            testing, and best practices.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 transition text-white font-medium px-6 py-3 rounded-lg shadow-md"
          >
            Let’s Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        ref={skillsRef}
        variants={fadeUp}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        className="mt-20"
      >
        <h3 className="text-2xl font-semibold text-center mb-12">My Tools & Proficiency</h3>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Skills_Data.map((skill) => (
            <motion.div key={skill.name} variants={skillCardVariant}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
