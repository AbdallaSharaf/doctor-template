import { Outlet, useLocation } from "react-router-dom"; 
import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/Header/Header";

const Layout = () => {
  const location = useLocation(); // Get the current location
  const isHomePage = location.pathname === '/'; // Check if the current page is the homepage

  return (
    <>
      <Navbar /> {/* Navbar is outside of AnimatePresence */}
      <Header />
      {/* AnimatePresence handles the transitions between routes */}
      <AnimatePresence mode='wait'>
        {isHomePage ? (
          // Render Outlet without animation for the homepage
          <Outlet />
        ) : (
          // Animate other pages
          <motion.div
            key={location.pathname} // Ensure animation runs on route change
            initial={{ opacity: 0, y: '100%' }} // Start below the view
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ duration: 0.5 }} // Set the duration of the animation
          >
            <Outlet />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Layout;
