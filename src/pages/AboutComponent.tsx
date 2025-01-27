import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Header from "./Header/Header";

function AboutComponent() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".about-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        ".about-description",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".about-image",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <div>
        <Header/>
        <div className="min-h-screen bg-gradient-to-r from-purple-100 via-white to-indigo-100">
      <div className="h-40 lg:h-0"></div>
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center h-screen mx-auto px-6 md:px-20">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="about-title text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            About <span className="text-purple-600">Us</span>
          </h1>
          <p className="about-description text-lg md:text-xl text-gray-600 mb-8">
            At <strong>CodeSync</strong>, we believe in empowering developers to collaborate
            effortlessly. Our mission is to provide a platform where ideas turn into reality
            through the power of code.
          </p>
        </div>

        {/* Right Content */}
        <div className="about-image w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Us"
            className="w-full h-64 md:h-96 max-w-md md:max-w-lg rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Our <span className="text-purple-600">Vision</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="vision-card p-6 bg-purple-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">Innovation</h3>
              <p className="text-gray-600">
                Creating tools that foster creativity and seamless teamwork.
              </p>
            </motion.div>
            <motion.div
              className="vision-card p-6 bg-purple-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">Collaboration</h3>
              <p className="text-gray-600">
                Building a community where developers grow together.
              </p>
            </motion.div>
            <motion.div
              className="vision-card p-6 bg-purple-50 rounded-xl shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">Excellence</h3>
              <p className="text-gray-600">
                Delivering high-quality solutions that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default AboutComponent;
