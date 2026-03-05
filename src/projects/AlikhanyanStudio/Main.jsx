import { useEffect } from "react";
import Hero from "./Hero/Hero";
import Rooms from "./rooms/Rooms";
import Teachers from "./Teachers/Teachers";
import AlikhanyanStudioLogo from "../../assets/logos/alikhanyan_production.PNG";
import { Link } from "react-router";

import Subjects from "./Subjects/Subjects";
import Footer from "./Footer/Footer";

const AvosSchool = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-start items-center h-20 px-6 bg-black/70 backdrop-blur-md border-b border-black/40 shadow-lg text-white">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-xl hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/alikhanyan-studio" 
            className="text-2xl font-bold hover:text-white transition-colors"
          >
            Studio
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
