import "./Home.css";
import ProductionLogo from "../../assets/logos/alikhanyan_production.PNG";
import AvosSchoolLogo from "../../assets/logos/avos_school.PNG";
import BGvideo from "../../assets/hero_video.MP4";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-container flex justify-center items-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={BGvideo}
      ></video>
      <div className="flex flex-col gap-1 items-center md:flex-row justify-center ">
        <div className="w-3/6 md:w-1/5 flex flex-col justify-center items-center z-10 transition duration-300 ease-in-out hover:scale-125">
          <img src={ProductionLogo} alt="" />
          <Link to="/test">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Go to Production
            </button>
          </Link>
        </div>
        <div className="w-3/4 md:w-1/4 z-10 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:scale-125">
          <img src={AvosSchoolLogo} alt="" />
          <Link to="/avosschool">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Go to Avos School
            </button>
          </Link>
        </div>
        <div className="w-3/6 md:w-1/5 z-10 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:scale-125">
          <img src={ProductionLogo} alt="" />
          <Link to="/alikhanyan-studio">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Go to Alikhanyan Studio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
