import { rooms } from "../../../data/rooms";
const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:w-1/2">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="flex flex-col gap-10 bg-[#130046] m-5 p-5 rounded-[15px]"
        >
          <h1>{room.name}</h1>
          <div className="w-1/2 md:w-1/4">
            <img src={room.img} alt="" />
          </div>
          {/* <div className="flex flex-col gap-1">
            <p>Subject: {teacher.skills.subject}</p>
            <p>Experience: {teacher.skills.experience}</p>
            <p>{teacher.skills.atAvosSchool}</p>
          </div>
          <div>{teacher.description}</div> */}
        </div>
      ))}
    </div>
  );
};

export default Card;
