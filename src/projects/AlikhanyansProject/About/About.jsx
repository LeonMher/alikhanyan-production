import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";
import ArturPlaying from "../../../assets/project/about_us/artur_playing.jpg";
import TwoSingers from "../../../assets/project/about_us/two_singers.jpg"
import SingleSinger from "../../../assets/project/about_us/a_singer.jpg";  

const About = () => {
  return (
    <div className="flex flex-col gap-[30px] px-6 md:px-70 py-12 bg-black text-gray-300 min-h-screen">
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

      {/* Gallery Section */}
      <div className="flex flex-col items-center mt-12 w-full">
        <span className="text-4xl mb-6">Moments</span>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <img
            src={ArturPlaying}
            alt="Artur Playing"
            className="w-full md:w-1/3 rounded-xl object-cover h-64"
          />
          <img
            src={TwoSingers}
            alt="Band on Stage"
            className="w-full md:w-1/3 rounded-xl object-cover h-64 mx-auto"
          />
          <img
            src={SingleSinger}
            alt="Crowd Enjoying"
            className="w-full md:w-1/3 rounded-xl object-cover object-center h-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
