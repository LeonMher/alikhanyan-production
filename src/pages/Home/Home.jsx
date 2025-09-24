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
        <div className="flex flex-row md:flex-col gap-[50px] items-center">
          <Link to="/alikhanyans-project">
            <img className="w-[100px] md:w-[210px] logo-hover-scale cursor-pointer" src={ProductionLogo} alt="" />
          </Link>

        </div>

        <div className="flex flex-row md:flex-col gap-[50px] justify-center items-center">
          <Link to="/alikhanyan-studio">
            <img className="md:w-[500px] w-[150px] logo-hover-scale cursor-pointer" src={Studio} alt="" />
          </Link>

        </div>
        <div>
          <div className="flex flex-row gap-[50px] md:flex-col justify-center items-center">
            <Link to="/avosschool">
              <img
                className="md:w-[250px] w-[140px] logo-hover-scale cursor-pointer"
                src={AvosSchoolLogo}
                alt=""
              />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
