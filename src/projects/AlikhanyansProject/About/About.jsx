import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";

const About = () => {
  return (
    <div className="flex flex-col  gap-[30px] p-12 bg-black text-gray-300">
      <div className="flex justify-center">
        <span className="text-5xl font-bold mb-10">About us</span>
      </div>
      <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center">
        <img className="w-1/2 md:w-1/3 rounded-2xl" src={AboutUsPic} />
        <div className="flex flex-col justify-center items-center md:items-start gap-[30px]">
          <span className="text-4xl">Our Story</span>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            incidunt optio! Expedita, soluta ipsam. Tempora facere
            reprehenderit, impedit quas ipsa veritatis exercitationem nobis
            alias necessitatibus enim possimus in natus ratione.
          </span>
          <div className="flex flex-row items-around justify-around w-full">
            <div>
              <span className="text-red-900 font-bold text-4xl">10</span> +
              Years
            </div>
            <div>
              <span className="text-red-900 font-bold text-4xl">500</span> Live
              Shows
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
