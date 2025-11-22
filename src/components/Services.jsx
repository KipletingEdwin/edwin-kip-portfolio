import React from "react";
import Services_Data from '../data/services_data';

const Services = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl py-3 font-bold">Services</h1>
        <p className="text-2xl">Creative intuitive and user-friendly designs through ux research</p>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg 
      flex flex-col items-center text-center 
      hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-orange-500 text-5xl mb-4">
      {service.icon}
      </div>

            <h3 className="text-xl font-semibold text-white mb-3">
              {service.s_name}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {service.s_desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

// padding: 0px 30px;
// font-size: 50px;
// font-weight: 600;
