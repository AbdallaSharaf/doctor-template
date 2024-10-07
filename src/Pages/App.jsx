import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Team from '../components/Team/Team';
import Contact from '../components/Contact/Contact';
import MapComponent from '../components/Map/Map';
import BookingButton from '../components/BookingButton/BookingButton';
import Footer from '../components/Footer/Footer';

const App = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsButtonDisabled(true); // Disable button when MapComponent is in view
        } else {
          setIsButtonDisabled(false); // Enable button when MapComponent is out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the MapComponent is visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current); // Observe the MapComponent
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current); // Clean up observer on unmount
      }
    };
  }, [mapRef]);

  return (
    <>
      {/* Button stays fixed at the bottom */}
      <div className='fixed bottom-[75px] left-0 right-0 z-10 flex justify-center'>
        <BookingButton classes={`w-[90%] max-w-[380px] transition-all duration-300 ease-in-out ${isButtonDisabled ? 'opacity-0':'opacity-100'}`} disabled={isButtonDisabled} />
      </div>

      {/* Rest of the page content */}
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Contact />
      <div ref={mapRef}>
        <MapComponent />
      </div>
      <Footer />
    </>
  );
};

export default App;
