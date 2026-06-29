import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    const start = window.scrollY;
    const duration = 900;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div
      className={`
        group fixed bottom-8 right-8 z-[9999]
        transition-all duration-500 ease-out
        ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-24 opacity-0"
        }
      `}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Back to top"
        className="
          relative
          flex h-[52px] w-[52px] items-center justify-center
          overflow-hidden
          rounded-full

          border border-4 border-blue-01/15

          bg-[#F8FAFC]
          text-blue-03

          shadow-[0_8px_24px_rgba(10,18,42,0.12)]

          transition-all duration-300 ease-out

          hover:w-[155px]
          hover:bg-blue-01
          hover:text-white
          hover:shadow-[0_14px_35px_rgba(30,60,153,0.22)]

          active:scale-95
        "
      >
        <ArrowUp
          size={20}
          strokeWidth={2.6}
          className="
            relative z-10
            transition-all duration-300
            group-hover:-translate-y-[180%]
          "
        />

        <span
          className="
            absolute
            translate-y-[180%]
            whitespace-nowrap
            text-[13px]
            font-medium
            tracking-wide
            text-white
            transition-all
            duration-300
            group-hover:translate-y-0
          "
        >
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;