import Hero from "./Hero/Hero";
import About from "./About/About";
import Videos from "./Videos/Videos";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import Partners from './Partners/Partners'

const AlikhanyansProject = () => {
  return (
    <div className="flex flex-col w-full max-w-full overflow-x-hidden bg-black">
      <NavBar />
      <div className="shrink-0 w-full">
        <Hero />
      </div>
      {/* Block-level gap so About cannot margin-collapse into the hero */}
      <div className="h-10 w-full shrink-0 bg-black md:h-14" aria-hidden="true" />
      <div className="shrink-0 w-full">
        <About />
      </div>
      <Videos />
      <Gallery />
      <Partners />
      <Footer />
    </div>
  );
};

export default AlikhanyansProject;
