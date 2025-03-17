import Hero from "./Hero/Hero";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";

const AvosSchool = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center flex-col items-center">
        <Teachers />
        <Subjects />
      </div>
    </div>
  );
};

export default AvosSchool;
