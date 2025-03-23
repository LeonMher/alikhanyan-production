import "./Hero.css";
import AlikhanyanStudioLogo from "../../../assets/logos/alikhanyan_production.PNG";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="hero-container flex flex-row justify-center items-center p-[60px] gap-[20px]">
        <div>
          <div className="text-[70px] font-bold">Rehearsal Studio </div>
          <div className="text-[32px]">24/7 rehearsal spaces available</div>
          <Button sx={{ width: "200px" }} variant="contained">
            Call
          </Button>
        </div>
        <div>
          <img
            src={AlikhanyanStudioLogo}
            alt="alikhanyan-studio-logo"
            className="w-[200px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
