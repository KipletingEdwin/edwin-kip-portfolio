import React from 'react'
// import Example from './components/Example'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

const App = () => {
  return (
    <>

      <Navbar />
            {/* <Example /> */}
            <Home />
            <About />
            <Services />
            <Contact />
    </>
  )
}

export default App