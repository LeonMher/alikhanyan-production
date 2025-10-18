import "./Hero.css";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="hero-container flex items-around p-[40px] md:p-[90px]">
        <div className="hero-inner w-full p-[50px] flex flex-col md:flex-row items-center md:items-center justify-between">
          <div className="hero-left flex flex-col items-start">
            <div className="text-[48px] md:text-[70px] font-bold leading-tight">
              <div>Alikhanyan's</div>
              <div>Project</div>
            </div>
          </div>

          <div className="hero-right flex flex-col items-center md:items-end gap-4">
            <div className="text-[20px] md:text-[32px]">Call us for events</div>
            <Button sx={{ width: "180px" }} variant="contained">
              Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
