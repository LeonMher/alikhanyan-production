import BlueRoom from "../assets/rooms/blue_room.jpg";
import RedRoom from "../assets/rooms/red_room.jpg";
import GreenRoom from "../assets/rooms/green_room.jpg";
import OrangeRoom from "../assets/rooms/orange_room.JPG";

import BlueRoomDetails1 from "../assets/rooms/room_details/blue_room_details1.jpg";
import BlueRoomDetails2 from "../assets/rooms/room_details/blue_room_details2.jpg";
import BlueRoomDetails3 from "../assets/rooms/room_details/blue_room_details3.jpg";


export const rooms = [
  {
    name: "Blue Room",
    img: BlueRoom,
    price: "3000AMD/hour",
    instruments: `
        Drums: Yamaha Stage Custom
Keyboard: Korg Kronos 88 keys 
Bass Guitar Combo: Ampeg
Solo Guitar Combos: Artec, Vox, Fender Mustang GT 100
      `,
  },
  {
    name: "Red Room",
    img: RedRoom,
    price: "4000 AMD/hour",
    instruments: `
        Drums: Yamaha Stage Custom
Keyboard: Yamaha P-125 88 keys
Bass Guitar Combo: Hartke 4x10
Solo Guitar Amp: Peavey JSX Joe Satriani Signature 120-Watt Guitar Head
      `,
  },
  {
    name: "Green Room",
    img: GreenRoom,
    price: "3000 AMD/hour",
    instruments: `
        Drums: Yamaha Stage Custom
Stereo Monitor
Solo Guitar Combo: Marshall MG 10 
      `,
  },
  {
    name: "Orange Room",
    img: OrangeRoom,
    price: "3000 AMD/hour",
    instruments: `
        Keyboard: Yamaha MX61
Stereo Monitor
      `,
  },
];
