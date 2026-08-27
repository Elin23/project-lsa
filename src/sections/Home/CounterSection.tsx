import { useEffect, useRef, useState } from "react";

import { counterData, type CounterItemData } from "../../data/counterData";
import { useAppLoading } from "../../context/AppLoadingContext";

interface CounterItemProps extends CounterItemData {
  canStart: boolean;
}

interface CounterSectionProps {
  data?: CounterItemData[];
}

// Simple ease-out quadratic function for smooth deceleration
const easeOutQuad = (t: number): number => t * (2 - t);

const CounterItem = ({
  value,
  suffix = "",
  label,
  customValue,
  canStart,
}: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const itemRef = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  // Observer to track element visibility
  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation effect driven by requestAnimationFrame
  useEffect(() => {
    if (
      !canStart ||
      !isInView ||
      startedRef.current ||
      Boolean(customValue)
    ) {
      return;
    }

    startedRef.current = true;

    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 1600; // ms

    const updateCount = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(easedProgress * value);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [canStart, isInView, customValue, value]);

  return (
    <div
      ref={itemRef}
      className="group flex h-full w-full flex-col items-center justify-center text-center transition-all duration-500"
    >
      <h3 className="text-4xl font-bold leading-none text-white opacity-75 transition-all duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 md:text-[42px]">
        {customValue ?? count}
        {!customValue && suffix}
      </h3>

      <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/70">
        {label}
      </p>
    </div>
  );
};

export default function CounterSection({
  data = counterData,
}: CounterSectionProps) {
  const { isAppReady } = useAppLoading();

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#24449B] px-1 sm:px-5 lg:px-8">
      <div className="mx-auto grid min-h-30 grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={`flex items-center justify-center px-4 py-8 sm:px-6 md:py-5 ${
              index !== 0 ? "md:border-l md:border-white/15" : ""
            }`}
          >
            <CounterItem
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              customValue={item.customValue}
              canStart={isAppReady}
            />
          </div>
        ))}
      </div>
    </section>
  );
}