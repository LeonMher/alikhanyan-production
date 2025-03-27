import { rooms } from "../data/rooms";

const RoomsComponent = () => {
  return (
    <>
      {rooms.map((room, index) => (
        <div
          key={index}
          className="flex flex-col justify-around md:flex-row bg-amber-100"
        >
          <div className="w-full">
            <img className="w-full" src={room.img} alt="" />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-[30px] p-[20px] md:gap-[50px] p-[40px] md:w-1/2">
            <div>
              <span className="text-5xl md:text-7xl">{room.name}</span>
            </div>
            <div>
              <p>Price</p>
              {room.price}
            </div>
            <div>
              <p>Instruments</p>
              <p>{room.instruments}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomsComponent;
