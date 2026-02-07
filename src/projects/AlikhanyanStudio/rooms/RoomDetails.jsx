import { useParams } from "react-router";
import { useState } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);

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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Room Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            {room.name}
          </h1>
        </div>

        {/* Image Slideshow */}
        <div className="mb-8 sm:mb-12">
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, i) => (
                  <div key={i} className="min-w-full">
                    <img 
                      src={src} 
                      alt={`${room.name} ${i+1}`} 
                      className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        i === currentSlide 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
