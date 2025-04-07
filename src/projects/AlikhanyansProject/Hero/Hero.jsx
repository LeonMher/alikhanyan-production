import "./Hero.css";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="hero-container flex flex-row justify-center md:justify-start items-start p-[60px] md:p-[90px]">
        <div className="flex flex-col items-center md:items-start justify-center gap-[50px] md:gap-[20px]">
          <div className="text-[70px] font-bold flex flex-col">
            <span>Alikhanyan's</span>{" "}
            <span className="flex justify-center md:justify-start">
              Project
            </span>
          </div>
          <div className="flex justify-center text-[32px]">
            Call us for events
          </div>
          <Button sx={{ width: "200px" }} variant="contained">
            Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
