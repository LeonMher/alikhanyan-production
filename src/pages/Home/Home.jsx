import "./Home.css";
import ProductionLogo from "../../assets/logos/alikhanyan_production.PNG";
import AvosSchoolLogo from "../../assets/logos/avos_school.PNG";
import CoverPicture from "../../assets/cover_pic.jpg";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-container flex justify-center items-center">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={CoverPicture}
        alt=""
      />
      <div className="flex flex-col gap-1 justify-center items-center md:flex-row">
        <div className="md:w-1/5 flex flex-row md:flex-col justify-around items-center z-10 transition duration-300 ease-in-out hover:scale-125">
          <img className="w-3/9 md:w-4/6" src={ProductionLogo} alt="" />
          <Link to="/alikhanyans-project">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Project
            </button>
          </Link>
        </div>
        <div className="z-10 flex flex-row md:flex-col justify-around items-center transition duration-300 ease-in-out hover:scale-125">
          <img className="w-3/7 md:w-4/6" src={AvosSchoolLogo} alt="" />
          <Link to="/avosschool">
            <button className="w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Avos School
            </button>
          </Link>
        </div>
        <div className="md:w-1/5 z-10 flex flex-row md:flex-col justify-around items-center transition duration-300 ease-in-out hover:scale-125">
          <img className="w-3/10 md:w-4/6" src={ProductionLogo} alt="" />
          <Link to="/alikhanyan-studio">
            <button className="w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Studio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
