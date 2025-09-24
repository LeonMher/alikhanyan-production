import "./Home.css";
import React, { useState, useEffect } from "react";
import MusicLoader from "../../components/MusicLoader";
import ProductionLogo from "../../assets/logos/alikhanyans_project.png";
import Studio from "../../assets/logos/alikhanyans_studio.png";
import AvosSchoolLogo from "../../assets/logos/avos_school.PNG";
import { Link } from "react-router";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new window.Image();
    img.src = "https://res.cloudinary.com/ds06qiycz/image/upload/v1758738791/instruments_xqsgmi.jpg";
    img.onload = () => setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="home-container flex justify-center items-center min-h-screen">
        <MusicLoader />
      </div>
    );
  }

  return (
    <div className="home-container flex justify-center items-center ">
      <div className="flex flex-col md:flex-row w-full justify-around md:items-around items-center">
        <div className="flex flex-row md:flex-col gap-[50px] items-center duration-300 ease-in-out hover:scale-125">
          <img className="w-[100px] md:w-[210px]" src={ProductionLogo} alt="" />
          <Link to="/alikhanyans-project">
            <button className="w-[100px] relative left-[20px] md:left-0 text-[11px] text-white bg-blue-800 p-[20px] rounded-2xl cursor-pointer">
              Project
            </button>
          </Link>
        </div>

        <div className="flex flex-row md:flex-col gap-[50px] justify-center items-center duration-300 ease-in-out hover:scale-125">
          <img className="md:w-[500px] w-[150px]" src={Studio} alt="" />
          <Link to="/alikhanyan-studio">
            <button className="w-[100px] text-[11px]  text-white bg-blue-800 p-[20px] rounded-2xl cursor-pointer">
              Studio
            </button>
          </Link>
        </div>
        <div className="duration-300  ease-in-out hover:scale-125">
          <div className="flex flex-row gap-[50px] md:flex-col justify-center items-center">
            <img
              className="md:w-[250px] w-[140px]"
              src={AvosSchoolLogo}
              alt=""
            />
            <Link to="/avosschool">
              <button className="w-[100px] text-[11px] text-white bg-blue-800 p-[20px] rounded-2xl cursor-pointer">
                Avos School
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
