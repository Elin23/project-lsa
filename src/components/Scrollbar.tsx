import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const Scrollbar = () => {
  const progressRef = useRef<HTMLSpanElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useLenis(({ scroll, limit, velocity }) => {
    const progress = limit > 0 ? scroll / limit : 0;

    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`;
    }

    if (thumbRef.current) {
      const maxMove = window.innerHeight - 140;
      const move = progress * maxMove;

      thumbRef.current.style.transform = `
        translateY(${move}px)
        scaleY(${Math.min(1.4, 1 + Math.abs(velocity) * 0.04)})
      `;

      thumbRef.current.classList.add("is-scrolling");

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        thumbRef.current?.classList.remove("is-scrolling");
      }, 500);
    }
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress">
        <span ref={progressRef}></span>
      </div>

      <div className="floating-scrollbar">
        <span ref={thumbRef}></span>
      </div>
    </>
  );
};

export default Scrollbar;