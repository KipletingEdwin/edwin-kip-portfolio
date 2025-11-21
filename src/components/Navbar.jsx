import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className='flex justify-between items-center px-6 py-5 bg-gray-900 relative'>
      {/* Logo */}
      <Link to="/" className='text-3xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent   ' > Edwin
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 text-lg font-semibold text-gray-300'>
        <li><Link to="/" className='hover:text-white transition-colors duration-300'>Home</Link></li>
        <li><Link to="about" className='hover:text-white transition-colors duration-300'>About</Link></li>
        <li><Link to="services" className='hover:text-white transition-colors duration-300'>Services</Link></li>
        <li><Link to="/projects" className='hover:text-white transition-colors duration-300'>Projects</Link></li>
        <li><Link to="/contact" className='hover:text-white transition-colors duration-300'>Contact</Link></li>
      </ul>

      {/* Desktop Button */}

      <Link to="/contact" className='hidden md:block px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 font-bold text-white transition-colors duration-300'>
      Let's Connect
      </Link>

      {/* Mobile Menu Button */}

             <div className="md:hidden flex items-center">
         <button
           onClick={() => setIsOpen(!isOpen)}
           className="text-gray-300 focus:outline-none"
        >
           {isOpen ? (
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           )}
         </button>
       </div>


              {/* Mobile Menu */}
       {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden text-gray-300 font-semibold text-lg">
          <li><Link onClick={() => setIsOpen(false)} to="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 font-bold text-white transition-colors duration-300">
              Let's Connect
            </Link>
          </li>
        </ul>
      )}

      

    </nav>


  )
}

export default Navbar

