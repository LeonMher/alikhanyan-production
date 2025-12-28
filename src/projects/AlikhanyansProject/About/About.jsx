import { useEffect, useRef, useState } from "react";
import AboutUsPic from "../../../assets/project/aboutUsPic.jpeg";
import ArturPlaying from "../../../assets/project/about_us/artur_playing.jpg";
import TwoSingers from "../../../assets/project/about_us/two_singers.jpg";
import SingleSinger from "../../../assets/project/about_us/a_singer.jpg";
import BassGuitar from "../../../assets/project/about_us/bass_guitar.JPG";
import HeroBackdrop from "../../../assets/project/hero.jpg";
import ArturPlayingKeyboard from "../../../assets/project/about_us/Artur_playing_keyboard.JPG";
// import ParallaxBackground from "../../../assets/project/background.png";
// import ParallaxForeground from "../../../assets/project/foreground.png";

import "./About.css";

const About = () => {
  const parallaxRef = useRef(null);
  const backgroundLayerRef = useRef(null);
  const foregroundLayerRef = useRef(null);
  const momentsTrackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartPositionRef = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollPosition, setAutoScrollPosition] = useState(0);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const momentImages = [
    { src: ArturPlaying, alt: "Artur playing guitar" },
    { src: TwoSingers, alt: "Two singers on stage" },
    { src: SingleSinger, alt: "Solo singer performing" },
    { src: HeroBackdrop, alt: "Band performance on stage" },
    { src: BassGuitar, alt: "Bass guitar performing" },
    { src: ArturPlayingKeyboard, alt: "Artur playing keyboard" },

  ];

  const sliderImages = [...momentImages, ...momentImages];

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );
      const backgroundOffset = progress * 20;
      const foregroundOffset = progress * 45;

      if (backgroundLayerRef.current) {
        backgroundLayerRef.current.style.transform = `translateY(${backgroundOffset}px)`;
      }
      if (foregroundLayerRef.current) {
        foregroundLayerRef.current.style.transform = `translateY(${foregroundOffset}px)`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    if (!momentsTrackRef.current || isDragging) return;

    const track = momentsTrackRef.current;
    const trackWidth = track.scrollWidth / 2; // Half because we duplicate images
    const speed = trackWidth / 35; // 35 seconds to complete one cycle

    const animate = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      setAutoScrollPosition((prev) => {
        let newPosition = prev + speed * deltaTime;
        // Reset when we've scrolled one full cycle
        if (newPosition >= trackWidth) {
          newPosition = 0;
        }
        return newPosition;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lastTimeRef.current = null;
    };
  }, [isDragging]);

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = autoScrollPosition;
    setScrollLeft(autoScrollPosition);
  };

  // Handle touch drag
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartXRef.current = touch.clientX;
    dragStartPositionRef.current = autoScrollPosition;
    setScrollLeft(autoScrollPosition);
  };

  // Global mouse and touch move handlers
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const deltaX = dragStartXRef.current - e.clientX; // Inverted for natural drag feel
      const newPosition = dragStartPositionRef.current + deltaX;
      setScrollLeft(newPosition);
    };

    const handleGlobalTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      const deltaX = dragStartXRef.current - touch.clientX; // Inverted for natural drag feel
      const newPosition = dragStartPositionRef.current + deltaX;
      setScrollLeft(newPosition);
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      const track = momentsTrackRef.current;
      if (track) {
        const trackWidth = track.scrollWidth / 2;
        // Normalize position to be within bounds and update auto-scroll position
        let normalizedPosition = scrollLeft;
        if (normalizedPosition < 0) {
          normalizedPosition = 0;
        } else if (normalizedPosition >= trackWidth) {
          normalizedPosition = normalizedPosition % trackWidth;
        }
        setAutoScrollPosition(normalizedPosition);
      }
      setIsDragging(false);
    };

    const handleGlobalTouchEnd = () => {
      if (!isDragging) return;
      const track = momentsTrackRef.current;
      if (track) {
        const trackWidth = track.scrollWidth / 2;
        // Normalize position to be within bounds and update auto-scroll position
        let normalizedPosition = scrollLeft;
        if (normalizedPosition < 0) {
          normalizedPosition = 0;
        } else if (normalizedPosition >= trackWidth) {
          normalizedPosition = normalizedPosition % trackWidth;
        }
        setAutoScrollPosition(normalizedPosition);
      }
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove, { passive: false });
      document.addEventListener('touchend', handleGlobalTouchEnd);
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      document.body.style.touchAction = '';
    };
  }, [isDragging, scrollLeft]);

  // Update transform based on drag or auto-scroll
  useEffect(() => {
    if (!momentsTrackRef.current) return;
    const position = isDragging ? scrollLeft : autoScrollPosition;
    momentsTrackRef.current.style.transform = `translateX(-${position}px)`;
  }, [scrollLeft, autoScrollPosition, isDragging]);

  return (
    <div id="about-us" className="flex flex-col gap-[30px] px-4 md:px-8 lg:px-16 py-12 bg-black text-gray-300 min-h-screen w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-center">
        <span className="text-5xl font-bold mb-10">About us</span>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center">
        <img className="w-1/2 md:w-1/3 rounded-2xl" src={AboutUsPic} alt="About Us" />
        <div className="flex flex-col justify-center items-center md:items-start gap-[30px]">
          <span className="text-4xl">Our Story</span>
          <span>
            Alikhanyan’s Project Orchestra-ն հիմնադրվել է 2019 թվականին՝ մեկ նպատակով․ ստեղծել բարձրակարգ, կենդանի երաժշտություն, որը ոչ միայն հնչում է, այլև զգացվում է։
          </span>
          <button
            className="mt-4 px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700"
            onClick={() => window.location.href = '/about-details'}
          >
            Կարդալ ավելին
          </button>
          <div className="flex flex-row justify-around w-full">
            <div>
              <span className="text-red-900 font-bold text-4xl">10</span> + Years
            </div>
            <div>
              <span className="text-red-900 font-bold text-4xl">500</span> Live Shows
            </div>
          </div>
        </div>
      </div>

      {/* Moments Slider Section */}
      <div className="flex flex-col items-center mt-12 w-full gap-6">
        <span className="text-4xl">Moments</span>
        <div className="moments-wrapper w-full">
          <div
            ref={momentsTrackRef}
            className="moments-track"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
          >
            {sliderImages.map((image, index) => (
              <div className="moment-card" key={`${image.alt}-${index}`}>
                <img src={image.src} alt={image.alt} loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax scene */}
     
    </div>
  );
};

export default About;
