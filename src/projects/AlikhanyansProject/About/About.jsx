import { useEffect, useRef, useState } from "react";
import projectLogo from "../../../assets/logos/alikhanyans_project.png";
import CloudinaryImage from "../../../components/CloudinaryImage";
import { useAboutUsContent } from "../../../hooks/useAboutUsContent";
import { useMomentsImages } from "../../../hooks/useMomentsImages";
import "./About.css";

const MOMENT_IMAGE_WIDTH = 400;
/** Infinite marquee needs a long track; with few CMS images, duplication looks wrong. */
const MARQUEE_MIN_IMAGES = 4;

const About = () => {
  const { text: aboutUsText } = useAboutUsContent();
  const { images: momentImages } = useMomentsImages();
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

  const useMarquee = momentImages.length >= MARQUEE_MIN_IMAGES;
  // Duplicate only for seamless infinite scroll — each CMS image still appears once per cycle.
  const sliderImages = useMarquee
    ? [...momentImages, ...momentImages]
    : momentImages;

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

  // Auto-scroll animation (marquee only when there are enough unique images)
  useEffect(() => {
    if (!useMarquee || !momentsTrackRef.current || isDragging) return;

    const track = momentsTrackRef.current;
    const trackWidth = track.scrollWidth / 2; // Half because we duplicate images
    if (trackWidth <= 0) return;

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
  }, [isDragging, momentImages.length, useMarquee]);

  // Reset carousel position when CMS images replace the fallback set.
  useEffect(() => {
    setAutoScrollPosition(0);
    setScrollLeft(0);
    lastTimeRef.current = null;
  }, [momentImages]);

  // Handle mouse drag
  const handleMouseDown = (e) => {
    if (!useMarquee) return;
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartPositionRef.current = autoScrollPosition;
    setScrollLeft(autoScrollPosition);
  };

  // Handle touch drag
  const handleTouchStart = (e) => {
    if (!useMarquee) return;
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
    if (!useMarquee || !momentsTrackRef.current) return;
    const position = isDragging ? scrollLeft : autoScrollPosition;
    momentsTrackRef.current.style.transform = `translateX(-${position}px)`;
  }, [scrollLeft, autoScrollPosition, isDragging, useMarquee]);

  return (
    <div
      id="about-us"
      className="flex flex-col gap-[30px] px-4 md:px-8 lg:px-16 pt-12 pb-12 bg-black text-gray-300 min-h-screen w-full max-w-full overflow-x-hidden scroll-mt-[96px]"
    >
      {/* Header */}
      <div className="flex justify-center">
        <span className="text-5xl font-bold mb-10">About us</span>
      </div>

      {/* About Content */}
      <div className="flex flex-col md:flex-row gap-[30px] justify-center items-center">
        <img
          className="w-[160px] sm:w-[200px] md:w-[240px] h-auto object-contain shrink-0"
          src={projectLogo}
          alt="Alikhanyan's Project"
        />
        <div className="flex flex-col justify-center items-center md:items-start gap-[30px]">
          <span className="text-4xl">Our Story</span>
          <span>{aboutUsText}</span>
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
        <div className={`moments-wrapper w-full${useMarquee ? "" : " moments-wrapper--static"}`}>
          <div
            ref={momentsTrackRef}
            className={`moments-track${useMarquee ? "" : " moments-track--static"}`}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={
              useMarquee
                ? { cursor: isDragging ? "grabbing" : "grab", touchAction: "none" }
                : undefined
            }
          >
            {sliderImages.map((image, index) => (
              <div className="moment-card" key={`${image.src}-${index}`}>
                <CloudinaryImage
                  src={image.src}
                  width={MOMENT_IMAGE_WIDTH}
                  alt={image.alt}
                  loading="lazy"
                  draggable="false"
                />
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
