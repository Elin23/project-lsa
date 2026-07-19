import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  counterData,
  type CounterItemData,
} from "../../data/counterData";

import { useAppLoading } from "../../context/AppLoadingContext";

interface CounterItemProps extends CounterItemData {
  canStart: boolean;
}

interface CounterSectionProps {
  data?: CounterItemData[];
}

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
  const started = useRef(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) {
      return;
    }

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();

      const isElementVisible =
        rect.top < window.innerHeight + 100 &&
        rect.bottom > -100;

      setIsInView(isElementVisible);
    };

    // يفحص ظهور الكاونتر فورًا بدون انتظار الـ Observer
    checkVisibility();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.01,
        rootMargin: "120px 0px",
      }
    );

    observer.observe(element);

    window.addEventListener("resize", checkVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkVisibility);
    };
  }, [canStart]);

  useEffect(() => {
    if (
      !canStart ||
      !isInView ||
      started.current ||
      Boolean(customValue)
    ) {
      return;
    }

    started.current = true;

    let current = 0;

    const duration = 1500;
    const frameDuration = 16;
    const totalFrames = duration / frameDuration;
    const increment = value / totalFrames;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }

      setCount(Math.floor(current));
    }, frameDuration);

    return () => {
      window.clearInterval(timer);
    };
  }, [canStart, isInView, customValue, value]);

  return (
    <div
      ref={itemRef}
      className="
        group
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        text-center
        transition-all
        duration-500
      "
    >
      <h3
        className="
          text-4xl
          font-bold
          leading-none
          text-white
          transition-transform
          duration-300
          group-hover:scale-110
          md:text-[42px]
        "
      >
        {customValue ?? count}
        {!customValue && suffix}
      </h3>

      <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-white/70">
        {label}
      </p>
    </div>
  );
};

const CounterSection = ({
  data = counterData,
}: CounterSectionProps) => {
  const { isAppReady } = useAppLoading();

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#24449B]">
      <div className="grid min-h-30 grid-cols-2 md:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className={`
              flex
              items-center
              justify-center
              px-6
              py-8
              md:py-5
              ${
                index !== 0
                  ? "md:border-l md:border-white/15"
                  : ""
              }
            `}
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
};

export default CounterSection;