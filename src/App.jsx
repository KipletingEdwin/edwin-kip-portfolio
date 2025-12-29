import React from "react";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Toaster  position="top-right" />
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
