import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";// Heroicons
import lightLogo from '../../assets/logo-white.png';
import darkLogo from '../../assets/logo-red.png';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logo, setLogo] = useState(darkLogo)
  const toggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    setLogo(!isDarkMode ? lightLogo : darkLogo);
  };
  return (
    <div className="fixed top-0 left-0 z-10 h-14 w-full shadow-lg flex justify-between items-center pl-7 pr-6 bg-white dark:bg-gray-800">
      <img src={logo} alt="Logo" className="" />

      {/* Toggle Switch */}
      <div className="flex items-center">
        <div 
          className={`w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer relative`} 
          data-ison={isDarkMode}
          onClick={toggleSwitch}
        >
          {/* Sun Icon (for light mode) */}
          {/* Switch Handle */}
          <motion.div 
            className={`w-6 h-6 rounded-full flex justify-center items-center shadow-md ${isDarkMode ? 'bg-[#1e3a8a]' : 'bg-white'}`}
            layout
            transition={spring}
            style={{
              marginLeft: isDarkMode ? "auto" : "0"
            }}>
            {!isDarkMode && (
              <FontAwesomeIcon icon={faSun} className={`w-4 h-4 text-yellow-500 transition-opacity ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
            )}
            
            {/* Moon Icon (for dark mode) */}
            {isDarkMode && (
              <FontAwesomeIcon icon={faMoon} className={`w-4 h-4 text-white transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
            )}
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
