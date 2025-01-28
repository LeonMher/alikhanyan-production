import { teachers } from "../../../data/teachers";
const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:w-1/2">
      {teachers.map((teacher, index) => (
        <div
          key={index}
          className="flex flex-col gap-10 bg-[#130046] m-5 p-5 rounded-[15px]"
        >
          <h1>{teacher.name}</h1>
          <div className="w-1/2 md:w-1/4">
            <img src={teacher.img} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p>{teacher.skills.subject}</p>
            <p>{teacher.skills.experience}</p>
            <p>{teacher.skills.certification}</p>
            <p>{teacher.skills.languages}</p>
          </div>
          <div>{teacher.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
