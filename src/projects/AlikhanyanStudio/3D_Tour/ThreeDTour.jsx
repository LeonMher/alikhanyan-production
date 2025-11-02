import { Link } from "react-router";

const NAV_HEIGHT_PX = 64;

const ThreeDTour = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm"
        style={{ height: NAV_HEIGHT_PX }}
      >
        <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/alikhanyan-studio" className="hover:underline">
              Studio
            </Link>
          </div>
          <div>
            <Link to="/" className="text-sm text-gray-300 hover:underline">
              Back to main
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="w-full"
        style={{ paddingTop: NAV_HEIGHT_PX, height: `calc(100vh - ${NAV_HEIGHT_PX}px)` }}
      >
        <iframe
          src="https://alex-sharoff.ru/tour8/"
          title="3D Tour"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ThreeDTour;