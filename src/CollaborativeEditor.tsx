"use client";

import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { useRoom } from "@liveblocks/react";
import { useCallback, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { MonacoBinding } from "y-monaco";
import { Awareness } from "y-protocols/awareness";
import { useNavigate } from "react-router-dom"; 
import { FaSun, FaMoon } from "react-icons/fa"; // Import the icons for theme toggle

export function CollaborativeEditor() {
  const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor>();
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark/light mode
  const [code, setCode] = useState(""); // Store code
  const [output, setOutput] = useState<string | null>(null); // Store the output after running the code
  const [isResultVisible, setIsResultVisible] = useState(false); // Show the result div
  const room = useRoom();
  const navigate = useNavigate();
  const roomId = room.id; // Assuming room ID is stored here, adjust if different

  // Set up Liveblocks Yjs provider and attach Monaco editor
  useEffect(() => {
    let yProvider: any;
    let yDoc: Y.Doc;
    let binding: MonacoBinding;

    if (editorRef) {
      yDoc = new Y.Doc();
      const yText = yDoc.getText("monaco");
      yProvider = new LiveblocksYjsProvider(room, yDoc);

      // Attach Yjs to Monaco
      binding = new MonacoBinding(
        yText,
        editorRef.getModel() as editor.ITextModel,
        new Set([editorRef]),
        yProvider.awareness as Awareness
      );
    }

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
      binding?.destroy();
    };
  }, [editorRef, room]);

  const handleOnMount = useCallback((e: editor.IStandaloneCodeEditor) => {
    setEditorRef(e);
  }, []);

  // Copy the room URL to clipboard
  const copyRoomLink = () => {
    const roomLink = `${window.location.origin}/room/${roomId}`;
    navigator.clipboard.writeText(roomLink).then(() => {
      alert("Room link copied to clipboard! Share it with your friends.");
    });
  };

  // Close the room and navigate away (or simply close the tab)
  const closeRoom = () => {
    navigate("/home");  // You can change this to navigate anywhere or use `window.close()` to close the tab.
  };

  // Switch Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Capture the console output
  const captureConsoleOutput = () => {
    let capturedOutput: string[] = [];
    const originalConsoleLog = console.log;
    
    console.log = (...args: any[]) => {
      capturedOutput.push(args.join(" "));
    };

    return () => {
      console.log = originalConsoleLog; // Restore original console.log
      return capturedOutput.join("\n");
    };
  };

  // Handle running the code
  const runCode = () => {
    setOutput(null); // Clear previous output
    setIsResultVisible(false); // Hide the result div before running the code

    try {
      console.log("Running code...");
      let result: string | null = null;

      // Log the current code
      console.log("Current code:", code);

      // Capture console output
      const getCapturedOutput = captureConsoleOutput();

      // Only handle JavaScript code execution
      result = eval(code); // Execute the code
      console.log("Code execution result:", result ); // Log output to console

      // Capture and display console log output
      const capturedOutput = getCapturedOutput();
      setOutput(capturedOutput || "No output available");
      setIsResultVisible(true); // Show the result div
    } catch (err) {
      console.error("Error executing code:", err);
      setOutput(`Error: ${err.message || err}`); // Capture any errors
      setIsResultVisible(true); // Show the error in the result div
    }
  };

  // Close the result div
  const closeResult = () => {
    setIsResultVisible(false);
    setOutput(null); // Clear the output when closing
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Room Controls */}
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center space-x-4 sm:space-x-2">
        <div className="flex space-x-4 sm:space-x-2">
          <button
            onClick={copyRoomLink}
            className="bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700 transition duration-200"
          >
            Copy Room Link
          </button>
          <button
            onClick={closeRoom}
            className="bg-red-600 p-2 rounded-md text-white hover:bg-red-700 transition duration-200"
          >
            Close Room
          </button>

          <button
            onClick={toggleTheme}
            className="bg-gray-600 p-2 rounded-md text-white hover:bg-gray-700 transition duration-200 flex items-center space-x-2"
          >
            {/* Conditionally render icons based on the theme */}
            {isDarkMode ? (
              <FaMoon className="w-5 h-5" /> // Moon icon for Dark Mode
            ) : (
              <FaSun className="w-5 h-5" /> // Sun icon for Light Mode
            )}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 overflow-hidden">
        <Editor
          onMount={handleOnMount}
          height="100%"
          width="100%"
          theme={isDarkMode ? "vs-dark" : "vs-light"}
          defaultLanguage="javascript" // Only JavaScript
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            tabSize: 2,
            fontSize: 16,
            lineHeight: 22,
            minimap: { enabled: false },
            wordWrap: "on",
            padding: { top: 10, bottom: 10 },
            scrollbar: {
              alwaysConsumeMouseWheel: false,
            },
            cursorBlinking: "smooth",
            smoothScrolling: true,
          }}
        />
      </div>

      {/* Run Code Button (Positioned at the top-right corner) */}
      <div className="absolute top-4 right-4">
        <button
          onClick={runCode}
          className="bg-green-600 p-2 rounded-md text-white hover:bg-green-700 transition duration-200"
        >
          Run Code
        </button>
      </div>

      {/* Result Div */}
      {isResultVisible && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-90 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-1/2 max-w-xl">
            <h2 className="text-xl font-bold mb-4">Output</h2>
            <pre className="whitespace-pre-wrap">{output || "No output available"}</pre>
            <button
              onClick={closeResult}
              className="mt-4 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
