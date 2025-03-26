import { rooms } from "../data/rooms";

const RoomsComponent = () => {
  return (
    <>
      {rooms.map((room, index) => (
        <div key={index} className="flex justify-around bg-amber-100">
          <div className="w-full">
            <img className="w-full" src={room.img} alt="" />
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div>{room.name}</div>
            <div>{room.price}</div>
            <div className="w-1/2">
              <p>{room.instruments}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomsComponent;
