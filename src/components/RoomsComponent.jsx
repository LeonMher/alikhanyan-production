import { rooms } from "../data/rooms";

const RoomsComponent = () => {
  // Function to get color from room name
  const getRoomColor = (roomName) => {
    const nameLower = roomName.toLowerCase();
    if (nameLower.includes('blue')) {
      return {
        text: '#2563eb', // blue-600
        bg: '#2563eb',
        hover: '#1d4ed8' // blue-700
      };
    } else if (nameLower.includes('red')) {
      return {
        text: '#dc2626', // red-600
        bg: '#dc2626',
        hover: '#b91c1c' // red-700
      };
    } else if (nameLower.includes('green')) {
      return {
        text: '#16a34a', // green-600
        bg: '#16a34a',
        hover: '#15803d' // green-700
      };
    } else if (nameLower.includes('orange')) {
      return {
        text: '#ea580c', // orange-600
        bg: '#ea580c',
        hover: '#c2410c' // orange-700
      };
    }
    // Default to black if no color found
    return {
      text: '#000000',
      bg: '#000000',
      hover: '#1f2937'
    };
  };

  return (
    <>
      {rooms.map((room, index) => {
        const color = getRoomColor(room.name);
        return (
          <div
            key={index}
            className="flex flex-col justify-around md:flex-row bg-white text-black mb-[50px] p-2 md:p-12"
          >
            <div className="w-full ">
              <img className="w-full rounded-[65px]" src={room.img} alt="" />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[30px] p-[20px] md:gap-[50px] p-[40px] md:w-1/2">
              <div>
                <span 
                  className="text-5xl md:text-7xl font-bold"
                  style={{ color: color.text }}
                >
                  {room.name}
                </span>
              </div>
              <div>
                <p className="text-lg md:text-xl font-semibold mb-2">Price</p>
                <p 
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: color.text }}
                >
                  {room.price}
                </p>
              </div>
              <div>
                <p>Instruments</p>
                <p>{room.instruments}</p>
              </div>
              <div>
                <a
                  href={`/studio/room/${room.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="inline-block text-white px-4 py-2 rounded-md mt-2 transition-colors duration-200"
                  style={{ 
                    backgroundColor: color.bg,
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = color.hover}
                  onMouseLeave={(e) => e.target.style.backgroundColor = color.bg}
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RoomsComponent;
