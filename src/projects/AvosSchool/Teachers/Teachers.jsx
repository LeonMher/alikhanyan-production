import "./Teachers.css";
import Card from "./Card";

const Teachers = () => {
  return (
    <div className="text-white bg-[#001632] py-14 pb-20 md:py-16 md:pb-24">
      <div className="flex items-center flex-col mb-10 md:mb-14">
        <h1 className="text-[40px]">Our Teachers</h1>
      </div>
      <div className="flex items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Teachers;
