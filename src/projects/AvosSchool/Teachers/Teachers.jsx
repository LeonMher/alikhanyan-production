import "./Teachers.css";
import Card from "./Card";

const Teachers = () => {
  return (
    <div className="text-white bg-[#001632]">
      <div className="flex items-center flex-col pt-10">
        <h1 className="text-[40px]">Our Teachers</h1>
      </div>
      <div className="flex item-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Teachers;
