import Hero from "./Hero/Hero";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";
import Footer from "./Footer/Footer";

const AvosSchool = () => {
  return (
    <div>
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
