import React, { useRef } from "react";
import profile_img from "../assets/profile_img.jpg";
import Skills_Data from "../data/skills_data";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

// Fade-left and fade-right animations
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// Stagger container
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  // Scroll trigger for main section
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll trigger for skills
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  // Parallax effect for image
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="text-white py-20 px-6 md:px-12"
    >
      {/* Heading */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">About Me</h2> 
        <p className="text-gray-400 mt-2">
          User Interface, User Experience, and Graphic Designer
        </p>
      </motion.div>

      {/* Main Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT — Profile with parallax */}
        <motion.div variants={fadeLeft} className="flex justify-center">
          <motion.div
            ref={parallaxRef}
            style={{ y: parallaxY }}
            className="bg-[#1A1A1A] rounded-t-[200px] w-[320px] md:w-[380px]
                       h-[480px] md:h-[520px] flex items-end overflow-hidden shadow-xl"
          >
            <motion.img
              src={profile_img}
              alt="Profile"
              className="w-full object-cover transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — Text fades right */}
        <motion.div variants={fadeRight} className="space-y-6">
          <p className="text-gray-400 leading-relaxed">
            I am a passionate and detail-oriented UI/UX Designer dedicated to
            crafting seamless, user-friendly digital experiences. With a deep
            understanding of user behavior, I design interfaces that are not
            only visually appealing but also functional and accessible.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I have worked on diverse digital products—websites, apps, and
            systems—always aiming to balance business needs and user-friendly
            experiences. Every design is backed by research, testing, and best
            practices.
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

      {/* Skills Section */}
      <motion.div
        ref={skillsRef}
        variants={fadeLeft}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        className="mt-20"
      >
        <h3 className="text-2xl font-semibold text-center mb-12">
          My Tools & Proficiency
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
          {Skills_Data.map((skill, index) => {
            const animatedValue = skillsInView ? skill.percentage : 0;

            return (
              <motion.div
                key={index}
                variants={fadeRight}
                className="flex flex-col items-center"
              >
                <div className="w-36 h-36 mb-4">
                  <CircularProgressbar
                    value={animatedValue}
                    text={`${animatedValue}%`}
                    styles={buildStyles({
                      textColor: "#fff",
                      pathColor: "#f97316",
                      trailColor: "#333",
                      strokeLinecap: "round",
                    })}
                  />
                </div>

                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm text-gray-300">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
