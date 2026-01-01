import React, { useRef } from "react";
import heroImg from "../../assets/images/profile_img.jpg";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { delay } from "motion";

// fade-left
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

// fade-right
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Home = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  // Parallax for hero image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const roles = [
    "Frontend Developer",
    "UI/UX Designer",
    "React & Motion Specialist",
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-24 overflow-hidden"
    >
      {/* LEFT TEXT */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col gap-6 max-w-xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Edwin
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Building clean, scalable, and visually refined interfaces that deliver
          smooth, meaningful user experiences and bring clarity to every
          interaction.
        </p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 mt-3"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px #ff7a00" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-bold text-white transition-all"
          >
            Explore My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white rounded-lg font-bold transition-all"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* ROLE*/}

        {/* ROLE / SKILLS HIGHLIGHT BAR */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-4 mt-10"
        >
          {roles.map((role, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className="px-4 py-2 rounded-full border border-gray-700 bg-[#161616] 
                  text-sm font-medium hover:border-orange-500 
                 transition-all shadow-md hover:shadow-orange-500/20"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE — fade-right + parallax + floating */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative mt-16 md:mt-0"
        style={{ y: parallaxY }} // parallax applied here
      >
        <motion.img
          src={heroImg}
          alt="Profile"
          className="w-[320px] md:w-[420px] rounded-2xl object-cover shadow-2xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
