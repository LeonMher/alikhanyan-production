import "./Hero.css";
import AlikhanyanStudioLogo from "../../../assets/logos/alikhanyans_studio.png";
import { Button } from "@mui/material";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="hero-container-studio flex flex-row justify-center items-center p-[60px] gap-[20px]">
        <div className="hero-inner w-full p-[50px] flex flex-col items-center justify-center gap-6">
          <div className="text-[70px] font-bold text-white">Rehearsal Studio </div>
          <div className="text-[22px] sm:text-[32px] text-white">24/7 rehearsal spaces available</div>

          <div className="flex justify-center w-full">
            <Link to="/alikhanyan-studio/3d-tour" className="w-full sm:w-auto">
              <Button 
                className="w-full sm:w-auto" 
                variant="contained"
                size="large"
                sx={{
                  fontSize: "18px",
                  padding: "12px 32px",
                  fontWeight: 600
                }}
              >
                3D Tour
              </Button>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;