import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    const start = window.scrollY;
    const duration = 900;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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
        group fixed bottom-6 right-6 z-[9999]
        transition-all duration-500 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-24 opacity-0"}
      `}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Back to top"
        className="
          relative flex h-[50px] w-[50px] items-center justify-center
          overflow-hidden rounded-full bg-blue-02 text-white
          shadow-[0_0_0_4px_rgba(200,16,46,0.18),0_12px_30px_rgba(10,18,42,0.35)]
          transition-all duration-300 ease-out
          hover:w-[145px] hover:bg-red-01
          active:scale-95
        "
      >
        <ArrowUp
          size={18}
          strokeWidth={2.8}
          className="transition-all duration-300 group-hover:-translate-y-[180%]"
        />

        <span className="absolute translate-y-[180%] whitespace-nowrap text-[13px] font-bold text-white transition-all duration-300 group-hover:translate-y-0">
          Back to Top
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;