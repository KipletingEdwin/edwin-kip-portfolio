import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center py-5 px-5 text-xl' >

      <div>
        <h1 className='text-4xl font-bold bg-linear-to-r from-[#ff6a00] to-[#ffa100] text-transparent bg-clip-text  '>Edwin</h1>
      </div>

      <div >
        <ul className='hidden md:flex items-center gap-8 text-gray-300 font-bold text-2xl'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className='px-5 py-2 rounded bg-[#FF7A00]  hover:bg-[#e96a00] cursor-pointer font-bold  '>Let's Connect</button>
      </div>
   
      
    </div>
  )
}

export default Navbar

// hidden md:flex items-center gap-8 text-gray-300
