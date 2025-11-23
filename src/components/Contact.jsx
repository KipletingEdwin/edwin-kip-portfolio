import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2">
        Cultivating Connections: Reach Out And Connect With Me.
        </p>
      </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="First Name"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Last Name"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter Email"
            />
          </div>

          {/* Address */}
          {/* <div>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Address"
            />
          </div> */}

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Phone Number"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <textarea
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Project Details..."
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
