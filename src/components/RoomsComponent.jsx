import { useState } from "react";
import { rooms } from "../data/rooms";

// Detailed images for room sliders
import BlueRoomDetails1 from "../assets/rooms/room_details/blue_room_details1.jpg";
import BlueRoomDetails2 from "../assets/rooms/room_details/blue_room_details2.jpg";
import BlueRoomDetails3 from "../assets/rooms/room_details/blue_room_details3.jpg";
import GreenRoomDetails1 from "../assets/rooms/room_details/green_room_details1.jpg";
import GreenRoomDetails2 from "../assets/rooms/room_details/green_room_details2.jpg";
import RedRoomDetails1 from "../assets/rooms/room_details/red_room_details1.jpg";
import RedRoomDetails2 from "../assets/rooms/room_details/red_room_details2.jpg";
import RedRoomDetails3 from "../assets/rooms/room_details/red_room_details3.jpg";

// Shared helpers
const getRoomColor = (roomName) => {
  const nameLower = roomName.toLowerCase();
  if (nameLower.includes("blue")) {
    return {
      text: "#2563eb", // blue-600
      bg: "#2563eb",
      hover: "#1d4ed8", // blue-700
    };
  } else if (nameLower.includes("red")) {
    return {
      text: "#dc2626", // red-600
      bg: "#dc2626",
      hover: "#b91c1c", // red-700
    };
  } else if (nameLower.includes("green")) {
    return {
      text: "#16a34a", // green-600
      bg: "#16a34a",
      hover: "#15803d", // green-700
    };
  } else if (nameLower.includes("orange")) {
    return {
      text: "#ea580c", // orange-600
      bg: "#ea580c",
      hover: "#c2410c", // orange-700
    };
  }
  // Default to black if no color found
  return {
    text: "#000000",
    bg: "#000000",
    hover: "#1f2937",
  };
};

const getRoomImages = (room) => {
  const nameLower = room.name.toLowerCase();
  const isBlueRoom = nameLower.includes("blue");
  const isGreenRoom = nameLower.includes("green");
  const isRedRoom = nameLower.includes("red");

  if (isGreenRoom) {
    return [GreenRoomDetails1, GreenRoomDetails2, room.img];
  } else if (isBlueRoom) {
    return [BlueRoomDetails1, BlueRoomDetails2, BlueRoomDetails3];
  } else if (isRedRoom) {
    return [RedRoomDetails1, RedRoomDetails2, RedRoomDetails3];
  }

  // Fallback: just use the main image
  return [room.img, room.img, room.img];
};

const RoomCard = ({ room }) => {
  const color = getRoomColor(room.name);
  const images = getRoomImages(room);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex flex-col justify-around md:flex-row bg-white text-black mb-[50px] p-2 md:p-12">
      {/* Image slider on the left */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <div className="relative w-full">
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="min-w-full">
                  <img
                    src={src}
                    alt={`${room.name} ${i + 1}`}
                    className="w-full h-[320px] sm:h-[380px] md:h-[440px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      i === currentSlide
                        ? "bg-black w-8"
                        : "bg-black/30 hover:bg-black/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-[24px] p-[20px] md:gap-[32px] md:p-[40px]">
        <div>
          <span
            className="text-4xl md:text-6xl font-bold"
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
          <p className="font-semibold mb-1">Instruments</p>
          <p>{room.instruments}</p>
        </div>
        {room.bookUrl && (
          <a
            href={room.bookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-white font-semibold text-lg transition-colors"
            style={{ backgroundColor: color.bg }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = color.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = color.bg;
            }}
          >
            Book now
          </a>
        )}
      </div>
    </div>
  );
};

const RoomsComponent = () => {
  return (
    <>
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </>
  );
};

export default RoomsComponent;
