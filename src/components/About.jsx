import React from "react";
import profile_img from "../assets/profile_img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111] text-white py-20 px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-400 mt-2">
          User Interface And User Experience And Also Graphic Designer
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — IMAGE IN ARCH CARD */}
        <div className="flex justify-center">
          <div className="bg-[#1A1A1A] rounded-[50px] rounded-b-none w-[320px] md:w-[380px] h-[480px] md:h-[520px] flex items-end overflow-hidden">
            <img
              src={profile_img}
              alt="Profile"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div>
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a passionate and detail-oriented UI/UX Designer dedicated to
            crafting seamless, user-friendly digital experiences. With a deep
            understanding of user behavior, I design interfaces that are not
            only visually appealing but also highly functional and accessible.
            My expertise lies in user research, wireframing, prototyping, and
            usability testing—all of which help me create designs that enhance
            user engagement and satisfaction. I believe that great design goes
            beyond aesthetics; it should solve real problems, improve usability,
            and provide meaningful interactions.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            Throughout my career, I have worked on diverse projects, designing
            intuitive websites, mobile applications, and digital products that
            align with both business goals and user needs. My process is rooted
            in data-driven decision-making, ensuring that every design choice is
            backed by research, usability testing, and industry best practices.
          </p>

          {/* BUTTON */}
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white font-medium px-6 py-3 rounded-lg">
            Let’s Connect
          </button>
        </div>
      </div>
    </section>


  );
};

export default About;
