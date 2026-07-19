import { useEffect, useState } from "react";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Slider = <T,>({ items, renderItem }: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const active = items[activeIndex];

  return (
    <>
      <div key={activeIndex} className="animate-[fadeSlide_500ms_cubic-bezier(0.22,1,0.36,1)]">
        {renderItem(active)}
      </div>

      <div className="mt-9 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition cursor-pointer ${
              activeIndex === index
                ? "bg-[#1f3f93]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;