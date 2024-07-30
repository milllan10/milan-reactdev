import React, { useState, createContext, useContext, useEffect } from 'react';
import { LuSun, LuMoon } from "react-icons/lu";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";

// Create a ThemeContext outside of the component
const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Toggle theme function
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  // Toggle mobile menu function
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle side effects
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <header className={`p-4 transition-bg-color duration-slow ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`container mx-auto flex justify-between items-center w-11/12 transition-text-color duration-slow ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
          <div className="text-2xl font-bold">{isDarkTheme ? '<MilanHingu/>' : '<MilanHingu/>'}</div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-4 transition-text-color duration-slow ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
            <a href="#about" className="hover:text-gray-400 transition-colors duration-300">About</a>
            <a href="#work" className="hover:text-gray-400 transition-colors duration-300">Work</a>
            <a href="#testimonials" className="hover:text-gray-400 transition-colors duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a>
            <span>|</span>
            <button onClick={toggleTheme} className="text-xl hover:text-gray-400 transition-colors duration-300">
              {isDarkTheme ? <IoMoonOutline className="text-xl" /> : <LuSun className="text-xl" />}
            </button>
            <button className={`py-1 px-4 rounded-xl transition-colors duration-300 ${isDarkTheme ? 'bg-white hover:bg-gray-800 text-gray-900 hover:text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
              Download CV
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isDarkTheme ? 'text-white' : 'text-gray-600'} hover:text-gray-400 transition-colors duration-300`}
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed top-16 right-0 w-full h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} md:hidden transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#about" className="hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>About</a>
              <a href="#work" className="hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Work</a>
              <a href="#testimonials" className="hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="hover:text-gray-400 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
              <hr className="border-gray-300" />
              <div onClick={toggleTheme} className="flex justify-between items-center w-full hover:text-gray-400 transition-colors duration-300">
                <span>Switch Theme</span> <span>{isDarkTheme ? <IoMoonOutline className="text-xl" /> : <LuSun className="text-xl" />}</span>
              </div>
              <button className={`w-full py-1 px-4 rounded-xl transition-colors duration-300 ${isDarkTheme ? 'bg-white hover:bg-gray-800 text-gray-900 hover:text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                Download CV
              </button>
            </nav>
          </div>
        </div>
      </header>
    </ThemeContext.Provider>
  );
};

export default Header;
