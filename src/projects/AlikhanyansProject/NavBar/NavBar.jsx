import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

import "./navbar.css";

function NavBar() {
  const navRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState('#eee');

  const showNavbar = () => {
    const isOpen = !isMenuOpen;
    setIsMenuOpen(isOpen);
    if (isOpen) {
      navRef.current.classList.add("responsive_nav");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      navRef.current.classList.remove("responsive_nav");
      document.body.style.overflow = ""; // Restore scrolling
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.querySelector('.hero-container')?.offsetHeight || 600;
      
      // Change text color to black when scrolled past hero section (where white content starts)
      if (scrollY > heroHeight - 100) {
        setTextColor('#000000');
      } else {
        setTextColor('#eee');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu if open
    if (navRef.current.classList.contains("responsive_nav")) {
      navRef.current.classList.remove("responsive_nav");
      setIsMenuOpen(false);
      document.body.style.overflow = ""; // Restore scrolling
    }
  };

  return (
    <>
      <header style={{ color: textColor }}>
        <Link to="/">
          <h3 className="cursor-pointer" style={{ color: textColor }}>Project</h3>
        </Link>
        <nav ref={navRef}>
          <a 
            href="#about-us" 
            onClick={(e) => { e.preventDefault(); scrollToSection("about-us"); }}
            style={{ color: textColor }}
          >
            About us
          </a>
          <a 
            href="#our-singers" 
            onClick={(e) => { e.preventDefault(); scrollToSection("our-singers"); }}
            style={{ color: textColor }}
          >
            Our singers
          </a>
          <a 
            href="#our-partners" 
            onClick={(e) => { e.preventDefault(); scrollToSection("our-partners"); }}
            style={{ color: textColor }}
          >
            Our partners
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar} style={{ color: textColor }}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar} aria-label="Toggle menu" style={{ color: textColor }}>
          <FaBars />
        </button>
      </header>
      {isMenuOpen && <div className="menu-backdrop" onClick={showNavbar}></div>}
    </>
  );
}

export default NavBar;
