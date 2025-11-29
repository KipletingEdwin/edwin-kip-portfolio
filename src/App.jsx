import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

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
