import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";
import Footer from "./Footer/Footer";
import { Link } from "react-router";
const AvosSchool = () => {
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero-container')?.offsetHeight || 600;
      
      // Change text color to black when scrolled past hero section (where white content starts)
      if (scrollY > heroHeight - 100) {
        setTextColor('#000000');
      } else {
        setTextColor('#ffffff');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-start items-center p-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <Link 
          to="/" 
          className="text-2xl font-bold hover:text-gray-200 transition-colors"
          style={{ color: textColor }}
        >
          Home
        </Link>
      </nav>
      <Hero />
      <div className="flex justify-center flex-col items-center">
        <Teachers />
        <Subjects />
        <Footer />
      </div>
    </div>
  );
};

export default AvosSchool;
