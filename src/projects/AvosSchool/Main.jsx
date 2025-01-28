import Hero from "./Hero/Hero";
import Teachers from "./Teachers/Teachers";

const AvosSchool = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center items-center">
        <Teachers />
      </div>
    </div>
  );
};

export default AvosSchool;
