import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion for animations
import gsap from "gsap"; // Importing GSAP for additional animations
import { FaUserAlt } from "react-icons/fa"; // Icon for username
import { useDispatch } from "react-redux"; // Importing useDispatch for Redux actions
import { setUser } from "../redux/authSlice"; // Importing the setUser action
import Header from "../pages/Header/Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // GSAP Animation: On page load, animate the container and form elements
  useEffect(() => {
    gsap.from(".login-container", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".login-form input, .login-form button", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Handle the login functionality
  const handleLogin = () => {
    // Dispatch the username to Redux store
    if (username) {
      dispatch(setUser({ id: Date.now().toString(), username }));
    }
    
    // Navigate to home page after login
    navigate("/home");
  };

  return (
    <div>
      <Header />
      <div className="login-container h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400">
        <motion.div
          className="login-form bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
            <p className="text-white">Enter your username to continue</p>
          </div>
          <motion.div
            className="input-group flex items-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaUserAlt className="text-indigo-500 w-6 h-6 mr-3" />
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-3 w-full text-black rounded-md bg-white/70 focus:outline-none"
            />
          </motion.div>
          <motion.button
            onClick={handleLogin}
            className="w-full py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Login
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
