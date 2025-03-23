import Hero from "./Hero/Hero";
import Rooms from "./rooms/Rooms";
import Teachers from "./Teachers/Teachers";
import Subjects from "./Subjects/Subjects";

const AvosSchool = () => {
  return (
    <div>
      <Hero />
      <div className="flex justify-center flex-col items-center">
        <Rooms />
        {/* <Teachers /> */}
        {/* <Subjects /> */}
      </div>
    </div>
  );
};

export default AvosSchool;
