import Hero from "./Hero/Hero";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";
import Footer from "./Footer/Footer";
import { Link } from "react-router";
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
        <Teachers />
        <Subjects />
        <Footer />
      </div>
    </div>
  );
};

export default AvosSchool;
