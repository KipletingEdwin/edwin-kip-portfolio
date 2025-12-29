import React from 'react'

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className='flex items-center justify-center flex-col text-center mb-12'>
        <h1 className='text-3xl py-3 font-bold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent'>{title}</h1>
        <p className='text-xl text-gray-300 max-w-2xl'>{subtitle}</p>
    </div>

    //       <div className="text-center max-w-2xl mx-auto mb-12">
//         <h2 className="text-4xl font-bold text-white">{title}</h2>
//         {subtitle && (
//           <p className="text-gray-400 mt-3">
//             {subtitle}
//           </p>
//         )}
//       </div>
  )
}

export default SectionHeader



    //   <motion.div
    //     variants={fadeLeft}
    //     initial="hidden"
    //     animate={inView ? "visible" : "hidden"}
    //     className="flex items-center justify-center flex-col text-center mb-12"
    //   >
    //     <h1 className="text-3xl py-3 font-bold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">Services</h1>  
    //     <p className="text-2xl text-gray-300 max-w-2xl">
    //       Creative intuitive and user-friendly designs through UX research
    //     </p>
    //   </motion.div>
  