import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
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
            <label className="block mb-1 text-sm">First Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-sm">Last Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm">Enter Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm">Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="123 Street, City"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="+254 700 000000"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm">Project Details...</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Tell me about your project..."
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
