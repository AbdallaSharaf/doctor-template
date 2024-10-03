import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    viewport={{ once: true }}
    transition={{duration:1 , delay:0.25}}
    >
        <Navbar />
    </motion.div>
    )
}

export default App