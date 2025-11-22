import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
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
