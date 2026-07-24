import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sectionId = searchParams.get("section");

    if (!sectionId) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const scrollToTargetSection = () => {
      const section = document.getElementById(sectionId);

      if (!section) return false;

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return true;
    };

    const timers = [
      window.setTimeout(scrollToTargetSection, 100),
      window.setTimeout(scrollToTargetSection, 500),
      window.setTimeout(scrollToTargetSection, 1000),
      window.setTimeout(scrollToTargetSection, 3000),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollToSection;