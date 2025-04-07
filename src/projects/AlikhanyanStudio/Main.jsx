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
      <nav className="flex justify-start items-center p-4 text-white bg-red-950">
        <Link to="/" className="text-2xl font-bold">
          Home
        </Link>
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
