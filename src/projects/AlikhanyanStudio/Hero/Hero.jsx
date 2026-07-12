import "./Hero.css";
import { Button } from "@mui/material";
import { Link } from "react-router";

const STUDIO_HERO_BG =
  "https://res.cloudinary.com/ddoaufnnz/image/upload/v1778517774/studio-reception_isflbr.jpg";

const Hero = () => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="alikhanyan-studio-hero flex flex-row justify-center items-center p-[60px] gap-[20px]"
        style={{ backgroundImage: `url(${STUDIO_HERO_BG})` }}
      >
        <div className="hero-inner w-full p-[50px] flex flex-col items-center justify-center gap-6">
          <h1 className="text-[70px] font-bold text-white">Alikhanyan Studio</h1>
          <p className="text-[22px] sm:text-[32px] text-white">24/7 rehearsal spaces available</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <a
              href="https://app.slotify.am/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full sm:w-auto"
                variant="contained"
                size="large"
                sx={{
                  fontSize: "18px",
                  padding: "12px 32px",
                  fontWeight: 600,
                }}
              >
                Book
              </Button>
            </a>
            <Link to="/alikhanyan-studio/3d-tour" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto"
                variant="contained"
                size="large"
                sx={{
                  fontSize: "18px",
                  padding: "12px 32px",
                  fontWeight: 600,
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
