import { useEffect, useRef, useState } from "react";

import {
  counterData,
  type CounterItemData,
} from "../../data/counterData";

interface CounterItemProps extends CounterItemData {}

interface CounterSectionProps {
  data?: CounterItemData[];
}

const CounterItem = ({
  value,
  suffix = "",
  label,
  customValue,
}: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const itemRef = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) {
          return;
        }

        started.current = true;

        let current = 0;
        const duration = 1500;
        const interval = 16;
        const increment = value / (duration / interval);

        const timer = window.setInterval(() => {
          current += increment;

          if (current >= value) {
            setCount(value);
            window.clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, interval);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value]);

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
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#24449B]">
      <div
        className={`
          grid
          min-h-30
          grid-cols-2
          ${
            data.length >= 4
              ? "md:grid-cols-4"
              : data.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2"
          }
        `}
      >
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
              ${index !== 0 ? "md:border-l md:border-white/15" : ""}
            `}
          >
            <CounterItem
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              customValue={item.customValue}
            />
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default CounterSection;