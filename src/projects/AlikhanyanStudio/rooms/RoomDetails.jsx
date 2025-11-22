import { useParams, Link } from "react-router";
import { rooms } from "../../../data/rooms";

import BlueRoomDetails1 from "../../../assets/rooms/room_details/blue_room_details1.jpg";
import BlueRoomDetails2 from "../../../assets/rooms/room_details/blue_room_details2.jpg";
import BlueRoomDetails3 from "../../../assets/rooms/room_details/blue_room_details3.jpg";
import GreenRoomDetails1 from "../../../assets/rooms/room_details/green_room_details1.jpg";
import GreenRoomDetails2 from "../../../assets/rooms/room_details/green_room_details2.jpg";

import RedRoomDetails1 from "../../../assets/rooms/room_details/red_room_details1.jpg";
import RedRoomDetails2 from "../../../assets/rooms/room_details/red_room_details2.jpg";
import RedRoomDetails3 from "../../../assets/rooms/room_details/red_room_details3.jpg";



const RoomDetails = () => {
  const { roomId } = useParams();
  const room = rooms.find(r => r.name.replace(/\s+/g, "-").toLowerCase() === roomId);

  if (!room) {
    return (
      <div className="min-h-screen bg-red-950 text-white flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl">Room not found</p>
        </div>
      </div>
    );
  }

  // Check if this is the Blue Room, Green Room, or Orange Room
  const isBlueRoom = room.name.toLowerCase().includes('blue');
  const isGreenRoom = room.name.toLowerCase().includes('green');
  const isRedRoom = room.name.toLowerCase().includes('red');
  const isOrangeRoom = room.name.toLowerCase().includes('orange');
  
  // Set images based on room type
  let images;
  if (isGreenRoom) {
    images = [GreenRoomDetails1, GreenRoomDetails2, room.img]; // Use green room details + main image as third
  } else if (isBlueRoom) {
    images = [BlueRoomDetails1, BlueRoomDetails2, BlueRoomDetails3];
     // Use blue room details
  } else if (isRedRoom) {
    images = [RedRoomDetails1, RedRoomDetails2, RedRoomDetails3]
  }
  else {
    // For other rooms, use main image or default images
    images = [room.img, room.img, room.img];
  }

  // Background color based on room
  let backgroundColor = '#7f1d1d'; // default red-950 for other rooms (Red Room)
  if (isBlueRoom) {
    backgroundColor = '#00325cff'; // blue for Blue Room
  } else if (isGreenRoom) {
    backgroundColor = '#14532d'; // green-900 for Green Room
  } else if (isOrangeRoom) {
    backgroundColor = '#ea580c'; // orange-600 for Orange Room
  }

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor }}>
      {/* Navigation */}
      <div className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-4">
            <Link 
              to="/alikhanyan-studio" 
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              ← Back to Studio
            </Link>
            <span className="text-white/40">|</span>
            <Link 
              to="/" 
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Room Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            {room.name}
          </h1>
        </div>

        {/* Room Information */}
        <div className="mb-8 sm:mb-12 space-y-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white/90">
              Price
            </h2>
            <p className="text-lg sm:text-xl text-white">
              {room.price}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white/90">
              Instruments
            </h2>
            <p className="text-base sm:text-lg text-white/90 whitespace-pre-line leading-relaxed">
              {room.instruments}
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((src, i) => (
              <div 
                key={i} 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={src} 
                  alt={`${room.name} ${i+1}`} 
                  className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
