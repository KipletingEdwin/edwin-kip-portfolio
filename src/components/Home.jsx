import React, { useRef } from "react";
import heroImg from "../assets/profile_img.jpg";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

// fade-left
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

// fade-right
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
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
          A passionate frontend developer creating smooth, modern, and interactive
          user experiences using React, TailwindCSS, and animations.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-3">
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
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-10 max-w-md mx-auto">
          {[
            { num: "1+", label: "Years Experience" },
            { num: "3+", label: "Projects" },
            { num: "2+", label: "Clients" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.18 }}
              className="text-center p-4 rounded-xl border border-gray-700 bg-[#161616] hover:border-orange-500 transition-all shadow-lg hover:shadow-orange-500/40 wrap-break-words"
            >
              <h3 className="text-3xl font-bold text-orange-400">{stat.num}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
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
