import BlueRoom from "../assets/rooms/blue_room.JPG";
import RedRoom from "../assets/rooms/red_room.JPG";
import GreenRoom from "../assets/rooms/green_room.JPG";
import OrangeRoom from "../assets/rooms/orange_room.JPG";

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
    name: "Red Room (20 sq.m.)",
    img: RedRoom,
    price: "4000 AMD/hour",
    instruments: `
        Drums: Yamaha Stage Custom
Keyboard: Yamaha P-125 88 keys
Bass Guitar Combo: Hartke 4x10
Solo Guitar Amp: Peavey JSX Joe Satriani Signature 120-Watt Guitar Head
      `,
  },
  {
    name: "Green Room (10 sq.m.)",
    img: GreenRoom,
    price: "3000 AMD/hour",
    instruments: `
        Drums: Yamaha Stage Custom
Stereo Monitor
Solo Guitar Combo: Marshall MG 10 
      `,
  },
  {
    name: "Orange Room (22 sq.m.)",
    img: OrangeRoom,
    price: "3000 AMD/hour",
    instruments: `
        Keyboard: Yamaha MX61
Stereo Monitor
      `,
  },
];
