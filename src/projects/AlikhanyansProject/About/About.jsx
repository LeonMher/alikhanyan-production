import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";
import ArturPlaying from "../../../assets/project/about_us/artur_playing.jpg";
import TwoSingers from "../../../assets/project/about_us/two_singers.jpg";
import SingleSinger from "../../../assets/project/about_us/a_singer.jpg";
import BassGuitar from "../../../assets/project/about_us/bass_guitar.JPG";
import HeroBackdrop from "../../../assets/project/hero.jpg";
import ArturPlayingKeyboard from "../../../assets/project/about_us/Artur_playing_keyboard.JPG";

import "./About.css";

const About = () => {
  const momentImages = [
    { src: ArturPlaying, alt: "Artur playing guitar" },
    { src: TwoSingers, alt: "Two singers on stage" },
    { src: SingleSinger, alt: "Solo singer performing" },
    { src: HeroBackdrop, alt: "Band performance on stage" },
    { src: BassGuitar, alt: "Bass guitar performing" },
    { src: ArturPlayingKeyboard, alt: "Artur playing keyboard" },

  ];

  const sliderImages = [...momentImages, ...momentImages];

  return (
    <div id="about-us" className="flex flex-col gap-[30px] px-4 md:px-8 lg:px-16 py-12 bg-black text-gray-300 min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-center">
        <span className="text-5xl font-bold mb-10">About us</span>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center">
        <img className="w-1/2 md:w-1/3 rounded-2xl" src={AboutUsPic} alt="About Us" />
        <div className="flex flex-col justify-center items-center md:items-start gap-[30px]">
          <span className="text-4xl">Our Story</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            incidunt optio! Expedita, soluta ipsam. Tempora facere
            reprehenderit, impedit quas ipsa veritatis exercitationem nobis
            alias necessitatibus enim possimus in natus ratione.
          </span>
          <div className="flex flex-row justify-around w-full">
            <div>
              <span className="text-red-900 font-bold text-4xl">10</span> + Years
            </div>
            <div>
              <span className="text-red-900 font-bold text-4xl">500</span> Live Shows
            </div>
          </div>
        </div>
      </div>

      {/* Moments Slider Section */}
      <div className="flex flex-col items-center mt-12 w-full gap-6">
        <span className="text-4xl">Moments</span>
        <div className="moments-wrapper w-full">
          <div className="moments-track">
            {sliderImages.map((image, index) => (
              <div className="moment-card" key={`${image.alt}-${index}`}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
