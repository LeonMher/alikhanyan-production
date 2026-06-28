import { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 8;

const getScrollY = () =>
  window.scrollY || document.documentElement.scrollTop || 0;

export function useScrollHideNavbar({ disabled = false } = {}) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (disabled) {
      setIsNavbarVisible(true);
      return;
    }

    const onScroll = () => {
      const currentY = getScrollY();
      const delta = currentY - lastScrollY.current;

      if (currentY <= 0) {
        setIsNavbarVisible(true);
      } else if (delta > SCROLL_THRESHOLD) {
        setIsNavbarVisible(false);
      } else if (delta < -SCROLL_THRESHOLD) {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentY;
    };

    lastScrollY.current = getScrollY();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, [disabled]);

  return isNavbarVisible;
}
