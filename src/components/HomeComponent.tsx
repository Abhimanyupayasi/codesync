import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

function HomeComponent() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".hero-description",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".cta-buttons",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".image-container",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      );
  }, []);

  return (
    <div className=" min-h-screen bg-gradient-to-r from-indigo-100 via-white to-purple-100">
        <div
        className="h-40 lg:h-0"></div>
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen mx-auto px-6 md:px-20">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="hero-title text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Collaborate. <span className="text-indigo-600">Code.</span> Sync.
          </h1>
          <p className="hero-description text-lg md:text-xl text-gray-600 mb-8">
            Welcome to <strong>CodeSync</strong>, the open-source platform where
            teams can code in real-time. Build, share, and innovate faster than
            ever before.
          </p>
          <div className="cta-buttons flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <motion.button
              className="bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Right Content */}
        <div className="image-container w-full md:w-1/2 flex justify-center items-center">
  <img
    src="https://images.pexels.com/photos/12899161/pexels-photo-12899161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Hero"
    className="w-full h-64 md:h-96 max-w-md md:max-w-lg rounded-xl shadow-xl object-cover"
  />
</div>

      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose <span className="text-indigo-600">CodeSync</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="feature-card p-6 bg-indigo-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-600">
                Work together seamlessly with synchronized editing and updates.
              </p>
            </motion.div>
            <motion.div
              className="feature-card p-6 bg-indigo-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Scalable for Teams
              </h3>
              <p className="text-gray-600">
                Whether you're a small team or a large enterprise, we've got you
                covered.
              </p>
            </motion.div>
            <motion.div
              className="feature-card p-6 bg-indigo-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Open Source
              </h3>
              <p className="text-gray-600">
                Built for developers by developers. Completely free and
                customizable.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
