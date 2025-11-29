
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const firstName = form.current.firstName.value.trim();
    const lastName = form.current.lastName.value.trim();
    const email = form.current.email.value.trim();
    const phoneNumber = form.current.phoneNumber.value.trim();
    const message = form.current.message.value.trim();

    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_2r42uvp", // Service ID
        "template_5wg5k3m", //Template ID
        form.current,
        "4ujZMtpMTuQBs6Jtw" // Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-gray-400 mt-2">
            Cultivating Connections: Reach Out And Connect With Me.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="md:col-span-2">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number (optional)"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows="5"
              placeholder="Project Details..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-right">
            <button
              type="submit"
              disabled={loading}
              className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition flex items-center justify-center ${
                loading ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
