import { Link } from "react-router";

/** Full URL of the school 3D tour (embed or player page from Matterport, Kuula, your host, etc.) */
const SCHOOL_TOUR_URL = "https://alex-sharoff.ru/tour7/";

const NAV_HEIGHT_PX = 64;

const SchoolThreeDTour = () => {
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
            <Link to="/avosschool" className="hover:underline">
              School
            </Link>
          </div>
          <div>
            <Link to="/avosschool" className="text-sm text-gray-300 hover:underline">
              Back to school
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="w-full"
        style={{ paddingTop: NAV_HEIGHT_PX, height: `calc(100vh - ${NAV_HEIGHT_PX}px)` }}
      >
        <iframe
          src={SCHOOL_TOUR_URL}
          title="School 3D Tour"
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SchoolThreeDTour;
