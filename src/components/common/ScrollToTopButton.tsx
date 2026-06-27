import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`
        group fixed bottom-6 right-6 z-50
        transition-all duration-500 ease-out
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"}
      `}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Back to top"
        className="
          relative flex h-[50px] w-[50px] items-center justify-center
          overflow-hidden rounded-full
          bg-blue-02 text-white
          shadow-[0_0_0_4px_rgba(200,16,46,0.18),0_12px_30px_rgba(10,18,42,0.35)]
          transition-all duration-300 ease-out
          hover:w-[145px] hover:bg-red-01
          active:scale-95
        "
      >
        <ArrowUp
          size={18}
          strokeWidth={2.8}
          className="
            transition-all duration-300
            group-hover:-translate-y-[180%]
          "
        />

        <span
          className="
            absolute translate-y-[180%]
            whitespace-nowrap text-[13px] font-bold text-white
            transition-all duration-300
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