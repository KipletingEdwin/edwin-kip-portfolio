//import React from 'react'
import heroImg from '../assets/profile_img.jpg'



// const Home = () => {
//   return (
//     <div className='flex flex-row'>
//       <div className='flex'>
//         <h3>
//           Hi I am <span>Edwin Kipleting</span>
//         </h3>
//         <h1>Web Developer</h1>
//         <p>Crafting Seamless & Engaging Experiences</p>

//         <div>
//           <button>Let's Connect</button>
//           <button>Download CV</button>
//         </div>

//       </div>

//       <div>
//         <img src={profile_picture} alt='edwin' />
//       </div>
      
//     </div>
//   )
// }

// export default Home


import React from "react";

const Home = () => {
  return (
    <section className="w-full bg-[#0d0d0d] text-white py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-5">
          <p className="text-gray-300 text-lg">Hi I am</p>
          <h2 className="text-3xl font-semibold">Zahoor Ahmad</h2>

          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">
            UI/UX designer
          </h1>

          <p className="text-gray-400 max-w-md">
            Crafting Seamless & Engaging Experiences
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold">
              Let's Connect
            </button>

            <button className="px-6 py-3 border border-gray-500 rounded-lg font-semibold hover:bg-gray-800 transition">
              Download CV
            </button>
          </div>

          {/* STATS BOX */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="bg-[#111111] px-6 py-4 rounded-lg text-center">
              <p className="text-orange-500 text-2xl font-bold">4 Year</p>
              <p className="text-gray-400 text-sm">Experiences</p>
            </div>

            <div className="bg-[#111111] px-6 py-4 rounded-lg text-center">
              <p className="text-orange-500 text-2xl font-bold">500+</p>
              <p className="text-gray-400 text-sm">Project done</p>
            </div>

            <div className="bg-[#111111] px-6 py-4 rounded-lg text-center">
              <p className="text-orange-500 text-2xl font-bold">470</p>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-[#111111] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={heroImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
