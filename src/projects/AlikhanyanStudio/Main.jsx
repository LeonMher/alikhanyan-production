import Hero from "./Hero/Hero";
import Rooms from "./rooms/Rooms";
import Footer from "./Footer/Footer";
import SiteNavbar from "../../components/SiteNavbar";

const AlikhanyanStudio = () => {
  return (
    <div>
      <SiteNavbar sectionLabel="Studio" sectionPath="/alikhanyan-studio" />
      <Hero />
      <div className="flex justify-center flex-col items-center">
        <Rooms />
        <Footer />  
      </div>
    </div>
  );
};

export default AlikhanyanStudio;
