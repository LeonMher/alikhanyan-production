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
      <nav className="flex justify-between items-center p-4 text-white bg-black">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-bold">
            Home
          </Link>
          <Link to="/alikhanyan-studio" className="text-lg opacity-90 hover:opacity-100">
            Studio
          </Link>
        </div>
        <div>
          <Link to="/" className="text-sm text-gray-300">Back to main</Link>
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
