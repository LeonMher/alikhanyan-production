import "./Hero.css";
import AlikhanyanStudioLogo from "../../../assets/logos/alikhanyan_production.PNG";

const Hero = () => {
  return (
    <div className="hero-container flex justify-center items-center">
      <div>
        <img src={AlikhanyanStudioLogo} />
      </div>
    </div>
  );
};

export default Hero;
