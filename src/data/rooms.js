import BlueRoom from '../assets/rooms/blue_room.jpg';
import RedRoom from '../assets/rooms/red_room.jpg';
import GreenRoom from '../assets/rooms/green_room.jpg';
import OrangeRoom from '../assets/rooms/orange_room.JPG';

// const BlueRoom = "https://res.cloudinary.com/ds06qiycz/image/upload/v1782632829/orange_room_ytb5y6.jpg";

export const rooms = [
  {
    name: 'Blue Room',
    img: BlueRoom,
    price: '3000 AMD/hour',
    bookUrl: 'https://app.slotify.am/guest-room/199',
    instruments: `
        Drums: Yamaha Stage Custom
Keyboard: Korg Kronos 88 keys 
Bass Guitar Combo: Ampeg
Solo Guitar Combos: Artec, Vox, Fender Mustang GT 100
      `,
  },
  {
    name: 'Red Room',
    img: RedRoom,
    price: '4000 AMD/hour',
    bookUrl: 'https://app.slotify.am/guest-room/200',
    instruments: `
        Drums: Yamaha Stage Custom
Keyboard: Yamaha P-125 88 keys
Bass Guitar Combo: Hartke 4x10
Solo Guitar Amp: Peavey JSX Joe Satriani Signature 120-Watt Guitar Head
      `,
  },
  {
    name: 'Green Room',
    img: GreenRoom,
    price: '3000 AMD/hour',
    bookUrl: 'https://app.slotify.am/guest-room/201',
    instruments: `
        Drums: Yamaha Stage Custom
Stereo Monitor
Solo Guitar Combo: Marshall MG 10 
      `,
  },
  {
    name: 'Orange Room',
    img: OrangeRoom,
    price: '3000 AMD/hour',
    bookUrl: 'https://app.slotify.am/guest-room/202',
    instruments: `
        Keyboard: Yamaha MX61
Stereo Monitor
      `,
  },
];
