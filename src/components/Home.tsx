import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";  // Import uuid to generate unique room IDs
import { useSelector } from "react-redux";
import { selectUsername } from "../redux/authSlice"; // Import selector to access username
import { motion } from "framer-motion"; // For animations with Framer Motion
import Header from "../pages/Header/Header";

const Home = () => {
  const navigate = useNavigate();
  const username = useSelector(selectUsername);  // Access the username from Redux store

  // Function to create a unique room and navigate
  const createRoom = () => {
    const roomId = uuidv4();  // Generates a unique room ID
    navigate(`/room/${roomId}`);  // Navigate to the dynamically generated room ID
  };

  return (
   <div>
    <Header/> 
   <div className="mt-20 pb-10  bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400">
   <div className="flex mt-20 flex-col items-center justify-center h-full text-center px-4">
     {/* Welcome message with username */}
     <motion.h1
       className="text-5xl font-bold text-white mb-6"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }}
     >
       Welcome, {username}!
     </motion.h1>

     {/* Room creation prompt */}
     <motion.p
       className="text-xl text-white mb-8"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1, delay: 0.5 }}
     >
       Ready to collaborate? Create a new room to get started.
     </motion.p>

     {/* Create Room Button */}
     <motion.button
       onClick={createRoom}
       className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1, delay: 1 }}
     >
       Create Room
     </motion.button>
     <h2 className="text-center text-gray-300 py-2 text-3xl">"Innovating for seamless experiences."</h2>
     {/* Future Features Section */}
     <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">

     


       {/* Whiteboard Option */}
       <motion.div
         className="option bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg cursor-pointer"
         whileHover={{ scale: 1.05 }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 1.5 }}
       >
         <img
           src="https://liveblocks.io/_next/image?url=%2Fimages%2Fexamples%2Fthumbnails%2Ftldraw-whiteboard.jpg&w=828&q=90"
           alt="Whiteboard"
           className="w-full h-48 object-cover rounded-lg mb-4"
         />
         <h2 className="text-2xl text-white font-semibold">Collaborative Whiteboard</h2>
       </motion.div>

       {/* Text Editor Option */}
       <motion.div
         className="option bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg cursor-pointer"
         whileHover={{ scale: 1.05 }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 2 }}
       >
         <img
           src="https://liveblocks.io/_next/image?url=%2Fimages%2Fexamples%2Fthumbnails%2Ftext-editor.jpg&w=828&q=90"
           alt="Text Editor"
           className="w-full h-48 object-cover rounded-lg mb-4"
         />
         <h2 className="text-2xl text-white font-semibold">Collaborative Text Editor</h2>
       </motion.div>
     </div>
   </div>
 </div></div>
  );
};

export default Home;
