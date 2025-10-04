import { teachers } from "../../../data/teachers";
import { Link } from "react-router";

const Card = () => {
  return (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center w-full px-4 md:px-12">
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="flex flex-row bg-[#130046] text-white rounded-[15px] overflow-hidden w-full max-w-[900px] h-[250px]"
        >
          {/* Left: Image */}
          <div
            className="flex-shrink-0"
            style={{ width: "200px", height: "200px", margin: "25px 0 25px 25px" }}
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center gap-2 px-4 py-4 overflow-hidden">
            <h1 className="text-lg font-bold truncate">{teacher.name}</h1>
            <div className="text-sm leading-snug">
              <p>Subject: {teacher.skills.subject}</p>
              <p>Experience: {teacher.skills.experience}</p>
              <p>{teacher.skills.atAvosSchool}</p>
            </div>
            <p className="text-xs line-clamp-3">{teacher.description}</p>
            <div className="mt-2">
              <Link to={`/avoschool/teacher/${teacher.name.replace(/\s+/g, "-").toLowerCase()}`}>
                <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 rounded transition-all">More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
