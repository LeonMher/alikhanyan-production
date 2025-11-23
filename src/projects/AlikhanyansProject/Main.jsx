import Hero from "./Hero/Hero";
import About from "./About/About";
import Videos from "./Videos/Videos";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import Partners from './Partners/Partners'

const AlikhanyansProject = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Videos />
      <Gallery />
      <Partners />
      <Footer />
    </div>
  );
};

export default AlikhanyansProject;
