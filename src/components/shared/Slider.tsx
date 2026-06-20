import { useState } from "react";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const Slider = <T,>({ items, renderItem }: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = items[activeIndex];

  return (
    <>
      {renderItem(active)}

      <div className="mt-9 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition ${
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