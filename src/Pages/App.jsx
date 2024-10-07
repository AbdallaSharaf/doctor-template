import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Gallery from '../components/Gallery/Gallery'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'
import MapComponent from '../components/Map/Map'
import BookingButton from '../components/BookingButton/BookingButton'

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
        <Team />
        <Contact />
        <MapComponent />
        <div className='fixed flex z-20 justify-center bottom-[75px] w-full'><BookingButton classes={'w-[90%] max-w-[380px]'}/></div>
    </motion.div>
    )
}

export default App