import React, { useState } from "react";
import {motion} from 'framer-motion'
import projectsData from '../data/projectsData'

const tabs = ["All", "Website Design", "Mobile App Design", "Dashboard Design", "Web App Design"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Website Design");

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

      return (
        <section className="max-w-6xl mx-auto px-4 py-8">

       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Here are some of the projects I have worked on
        </p>
      </div>
    
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 items-center justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
    
          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-lg shadow transition"
              >
                {/* Lazy-loaded image */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.label}</p>
                  <span className="text-xs text-orange-500 font-medium">{project.brand}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      );
  
}



// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("Website Design");

//   const filteredProjects =
//     activeTab === "All"
//       ? projectsData
//       : projectsData.filter((project) => project.category === activeTab);

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Projects</h2>

//       {/* Tabs */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               activeTab === tab
//                 ? "bg-orange-500 text-white"
//                 : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <motion.div
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {filteredProjects.map((project) => (
//           <motion.div
//             key={project.id}
//             layout
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition"
//           >
//             {/* Lazy-loaded image */}
//             <img
//               src={project.image}
//               alt={project.title}
//               loading="lazy"
//               className="w-full h-48 object-cover rounded-t-lg"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{project.title}</h3>
//               <p className="text-sm text-gray-500">{project.label}</p>
//               <span className="text-xs text-orange-500 font-medium">{project.brand}</span>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

