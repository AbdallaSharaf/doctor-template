import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Gallery from './components/Gallery/Gallery'

const App = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true }}
    transition={{duration:1 , delay:0.25}}
    >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
    </motion.div>
    )
}

export default App