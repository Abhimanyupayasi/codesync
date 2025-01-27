import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard'; // Library for copying text
import { FaShareAlt, FaLock } from 'react-icons/fa'; // Lock icon for future features
import { MonacoEditor } from '@monaco-editor/react'; // Import Monaco editor
import { motion } from 'framer-motion'; // For animations

const Room = () => {
  const { id } = useParams<{ id: string }>(); // Get the dynamic 'id' from the URL
  const [roomData, setRoomData] = useState<any>(null); // Store room data from the API
  const [copied, setCopied] = useState(false); // State to manage copy status

  // Fetch the room data on component mount
  useEffect(() => {
    if (id) {
      fetch(`/api/room/${id}`) // Fetch room data from the server or Liveblocks
        .then(res => res.json())
        .then(data => {
          setRoomData(data); // Set the fetched room data
        })
        .catch(err => {
          console.error("Error fetching room data:", err);
        });
    }
  }, [id]);

  if (!roomData) {
    return <div>Loading room...</div>;
  }

  // Copy functionality for the room link
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copy status after 2 seconds
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl font-bold text-indigo-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Room: {id}
      </motion.h1>

      {/* Room Link and Copy Feature */}
      <div className="mb-6 text-center">
        <motion.div
          className="text-lg text-gray-800 p-4 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>Your Room Link:</p>
          <p className="font-semibold text-indigo-600">{window.location.href}</p>
          <CopyToClipboard text={window.location.href} onCopy={handleCopy}>
            <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">
              <FaShareAlt className="mr-2" />
              {copied ? "Link Copied!" : "Copy Room Link"}
            </button>
          </CopyToClipboard>
        </motion.div>
      </div>

      {/* Monaco Code Editor */}
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <MonacoEditor
          height="400px"
          language="javascript"
          value={`// Welcome to room ${id} \n\n`}
          options={{
            selectOnLineNumbers: true,
            wordWrap: "on",
            minimap: { enabled: false },
            automaticLayout: true,
          }}
        />
      </motion.div>

      {/* Locked Future Features */}
      <div className="mt-12">
        <motion.div
          className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg mt-8 cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex items-center justify-center">
            <FaLock className="text-white w-6 h-6 mr-2" />
            <h3 className="text-xl text-white font-semibold">Collaborative Whiteboard</h3>
          </div>
          <p className="text-white mt-2 text-center">
            This feature will be unlocked in the future. Stay tuned!
          </p>
        </motion.div>

        <motion.div
          className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg mt-8 cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="flex items-center justify-center">
            <FaLock className="text-white w-6 h-6 mr-2" />
            <h3 className="text-xl text-white font-semibold">Text Editor</h3>
          </div>
          <p className="text-white mt-2 text-center">
            This feature will be unlocked in the future. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Room;
