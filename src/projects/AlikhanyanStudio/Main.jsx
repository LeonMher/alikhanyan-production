import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Rooms from "./rooms/Rooms";
import Teachers from "./Teachers/Teachers";
import AlikhanyanStudioLogo from "../../assets/logos/alikhanyan_production.PNG";
import { Link } from "react-router";

import Subjects from "./Subjects/Subjects";
import Footer from "./Footer/Footer";

const AvosSchool = () => {
  const [textColor, setTextColor] = useState('#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero-container-studio')?.offsetHeight || 600;
      
      // Change text color to black when scrolled past hero section (where white footer starts)
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-2xl font-bold hover:text-gray-200 transition-colors"
            style={{ color: textColor }}
          >
            Home
          </Link>
          <Link 
            to="/alikhanyan-studio" 
            className="text-lg opacity-90 hover:opacity-100 transition-opacity"
            style={{ color: textColor }}
          >
            Studio
          </Link>
        </div>
        <div>
          <Link 
            to="/" 
            className="text-sm hover:text-gray-200 transition-colors"
            style={{ color: textColor }}
          >
            Back to main
          </Link>
        </div>
      </nav>
      <Hero />
      <div className="flex justify-center flex-col items-center">
        <Rooms />
        <Footer />  
      </div>
    </div>
  );
};

export default AvosSchool;
