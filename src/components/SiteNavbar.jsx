import { Link } from "react-router";
import { useScrollHideNavbar } from "../hooks/useScrollHideNavbar";

const SiteNavbar = ({ sectionLabel, sectionPath, className = "" }) => {
  const isNavbarVisible = useScrollHideNavbar();

  return (
    <nav
      className={[
        "scroll-hide-nav",
        "fixed top-0 left-0 right-0 z-[11000]",
        "flex justify-start items-center h-20 px-6",
        "bg-black/70 backdrop-blur-md border-b border-black/40 shadow-lg text-white",
        !isNavbarVisible && "scroll-hide-nav--hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl hover:text-gray-200 transition-colors">
          Home
        </Link>
        <Link
          to={sectionPath}
          className="text-2xl font-bold hover:text-white transition-colors"
        >
          {sectionLabel}
        </Link>
      </div>
    </nav>
  );
};

export default SiteNavbar;
