import "./Hero.css";
import { Link } from "react-router";
import AvosSchoolLogo from "../../../assets/logos/avos_school.PNG";

const Hero = () => {
  return (
    <div className="hero-container flex justify-center items-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="sr-only">Avos School — music lessons in Yerevan</h1>
        <img src={AvosSchoolLogo} alt="Avos School" />
        <Link
          to="/avosschool/3d-tour"
          className="inline-block rounded-lg bg-[#298280] text-white text-lg font-semibold px-10 py-3 shadow-lg hover:brightness-110 active:scale-[0.98] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          3D Tour
        </Link>
      </div>
    </div>
  );
};

export default Hero;
