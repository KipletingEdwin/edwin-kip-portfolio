import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
