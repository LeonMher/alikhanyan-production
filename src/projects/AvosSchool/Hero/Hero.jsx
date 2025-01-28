import "./Hero.css";
import AvosSchoolLogo from "../../../assets/logos/avos_school.PNG";

const Hero = () => {
  return (
    <div className="hero-container flex justify-center items-center">
      <div>
        <img src={AvosSchoolLogo} />
      </div>
    </div>
  );
};

export default Hero;
