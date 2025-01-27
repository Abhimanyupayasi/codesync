import { useState } from 'react';
import { FaCode } from 'react-icons/fa'; // Code icon for the logo
import { FiLogIn } from 'react-icons/fi'; // Login icon
import { FaChevronDown } from 'react-icons/fa'; // Downward Chevron icon for toggle
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigation handlers
  const handleNavigate = (path: string) => {
    navigate(path); // Navigate to the specified route
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank'); // Open external link in a new tab
  };

  return (
    <div>
      <div className="fixed w-full z-50 top-0 mt-0">
        <header className="backdrop-blur-lg top-0 z-40 w-full bg-white/30 shadow-lg border-b border-white/20">
          <div className="container mx-auto flex justify-between items-center p-5">
            {/* Logo */}
            <a
              onClick={() => handleNavigate('/')}
              className="flex items-center text-white cursor-pointer"
            >
              <FaCode className="w-10 h-10 text-indigo-500 p-2 bg-white rounded-full" />
              <span className="ml-3 text-black text-2xl font-bold">CodeSync</span>
            </a>

            {/* Mobile Toggle Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white p-2 rounded-md">
                <FaChevronDown
                  className={`text-black w-6 h-6 transition-transform ${
                    isMenuOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Menu Options for large screens */}
            <nav className="hidden md:flex flex-wrap items-center text-lg justify-center space-x-6">
              <a
                onClick={() => handleNavigate('/')}
                className="text-gray-900 hover:text-indigo-800 transition-all cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => handleNavigate('/about')}
                className="text-gray-900 hover:text-indigo-800 transition-all cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => handleNavigate('/blogs')}
                className="text-gray-900 hover:text-indigo-800 transition-all cursor-pointer"
              >
                Blog
              </a>
              <a
                onClick={() => handleExternalLink('https://www.abhimanyu.tech/#contact')}
                className="text-gray-900 hover:text-indigo-800 transition-all cursor-pointer"
              >
                Contact Us
              </a>
              <button
                onClick={() => handleNavigate('/login')}
                className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 text-white cursor-pointer rounded-full text-base shadow-lg transition-all"
              >
                <FiLogIn className="w-5 h-5 mr-2" />
                Login
              </button>
            </nav>
          </div>
        </header>

        {/* Menu Options for mobile screens */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden bg-white/90 backdrop-blur-lg shadow-lg`}
        >
          <div className="container mx-auto flex flex-col items-center py-4 space-y-4">
            <a
              onClick={() => handleNavigate('/')}
              className="text-gray-900 text-lg hover:text-indigo-800 transition-all cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => handleNavigate('/about')}
              className="text-gray-900 text-lg hover:text-indigo-800 transition-all cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleNavigate('/blogs')}
              className="text-gray-900 text-lg hover:text-indigo-800 transition-all cursor-pointer"
            >
              Blog
            </a>
            <a
              onClick={() => handleExternalLink('https://www.abhimanyu.tech/#contact')}
              className="text-gray-900 text-lg hover:text-indigo-800 transition-all cursor-pointer"
            >
              Contact Us
            </a>
            <button
              onClick={() => handleNavigate('/login')}
              className="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 text-white rounded-full cursor-pointer text-base shadow-lg transition-all"
            >
              <FiLogIn className="w-5 h-5 mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
