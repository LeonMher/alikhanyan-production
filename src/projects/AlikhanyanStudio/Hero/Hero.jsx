import "./Hero.css";
import AlikhanyanStudioLogo from "../../../assets/logos/alikhanyans_studio.png";
import { Button } from "@mui/material";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="hero-container-studio flex flex-row justify-center items-center p-[60px] gap-[20px]">
        <div className="hero-inner w-full p-[50px] flex flex-col items-center justify-center gap-6">
          <div className="text-[70px] font-bold">Rehearsal Studio </div>
          <div className="text-[22px] sm:text-[32px]">24/7 rehearsal spaces available</div>

          {/* changed: stack buttons on mobile, row on small+ screens; buttons become full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-4 w-full items-center sm:justify-center">
            <Button
              className="w-full sm:w-auto"
              sx={{ display: "flex", gap: "10px" }}
              variant="contained"
            >
              Book now
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#ffffffff" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path></svg>
            </Button>

            <Link to="/alikhanyan-studio/3d-tour" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto" variant="contained">
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