import {
  type ReactNode,
  useEffect,
  useState,
} from "react";

interface SliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  autoPlayDelay?: number;
  showDots?: boolean;
  className?: string;
}

const Slider = <T,>({
  items,
  renderItem,
  autoPlayDelay = 4000,
  showDots = true,
  className = "",
}: SliderProps<T>) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const safeActiveIndex =
    items.length > 0
      ? Math.min(activeIndex, items.length - 1)
      : 0;

  useEffect(() => {
    if (items.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((previousIndex) => {
        const safePreviousIndex = Math.min(
          previousIndex,
          items.length - 1,
        );

        return safePreviousIndex >= items.length - 1
          ? 0
          : safePreviousIndex + 1;
      });
    }, autoPlayDelay);

    return () => {
      window.clearInterval(interval);
    };
  }, [autoPlayDelay, items.length]);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[safeActiveIndex];

  const handleDotClick = (index: number) => {
    const nextIndex = Math.min(
      Math.max(index, 0),
      items.length - 1,
    );

    setActiveIndex(nextIndex);
  };

  return (
    <div className={`w-full min-w-0 ${className}`}>
      <div
        key={safeActiveIndex}
        className="
          animate-[fadeSlide_500ms_cubic-bezier(0.22,1,0.36,1)]
        "
      >
        {renderItem(activeItem, safeActiveIndex)}
      </div>

      {showDots && items.length > 1 && (
        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
          "
          role="tablist"
          aria-label="Slider navigation"
        >
          {items.map((_, index) => {
            const isActive = safeActiveIndex === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                className={`
                  cursor-pointer
                  rounded-full
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#1f3f93]
                  focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "h-2.5 w-7 bg-[#1f3f93]"
                      : `
                        h-2.5
                        w-2.5
                        bg-gray-300
                        hover:bg-gray-400
                      `
                  }
                `}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;