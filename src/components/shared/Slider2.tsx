import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ResponsiveVisibleItems {
  default: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  "2xl"?: number;
}

interface Slider2Props<T> {
  items: T[];
  visibleItems?: number | ResponsiveVisibleItems;
  gap?: number;
  renderItem: (item: T, index: number) => ReactNode;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  showControls?: boolean;
  showDots?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

const Slider2 = <T,>({
  items,
  visibleItems = 1,
  gap = 16,
  renderItem,
  autoPlay = true,
  autoPlayDelay = 4000,
  showControls = true,
  showDots = true,
  pauseOnHover = true,
  className = "",
}: Slider2Props<T>) => {
  const getVisibleItems = useCallback(() => {
    if (typeof visibleItems === "number") {
      return visibleItems;
    }

    if (typeof window === "undefined") {
      return visibleItems.default;
    }

    const screenWidth = window.innerWidth;

    if (
      screenWidth >= breakpoints["2xl"] &&
      visibleItems["2xl"] !== undefined
    ) {
      return visibleItems["2xl"];
    }

    if (
      screenWidth >= breakpoints.xl &&
      visibleItems.xl !== undefined
    ) {
      return visibleItems.xl;
    }

    if (
      screenWidth >= breakpoints.lg &&
      visibleItems.lg !== undefined
    ) {
      return visibleItems.lg;
    }

    if (
      screenWidth >= breakpoints.md &&
      visibleItems.md !== undefined
    ) {
      return visibleItems.md;
    }

    if (
      screenWidth >= breakpoints.sm &&
      visibleItems.sm !== undefined
    ) {
      return visibleItems.sm;
    }

    return visibleItems.default;
  }, [visibleItems]);

  const [currentVisibleItems, setCurrentVisibleItems] =
    useState(getVisibleItems);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const nextVisibleItems = getVisibleItems();

      setCurrentVisibleItems((previousVisibleItems) =>
        previousVisibleItems === nextVisibleItems
          ? previousVisibleItems
          : nextVisibleItems,
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getVisibleItems]);

  const effectiveVisibleItems = Math.min(
    Math.max(currentVisibleItems, 1),
    Math.max(items.length, 1),
  );

  const maxIndex = Math.max(
    items.length - effectiveVisibleItems,
    0,
  );

  const safeStartIndex = Math.min(startIndex, maxIndex);

  const sliderEnabled = items.length > effectiveVisibleItems;

  const next = useCallback(() => {
    if (!sliderEnabled) return;

    setStartIndex((previousIndex) => {
      const safeIndex = Math.min(previousIndex, maxIndex);

      return safeIndex >= maxIndex
        ? 0
        : safeIndex + 1;
    });
  }, [maxIndex, sliderEnabled]);

  const previous = useCallback(() => {
    if (!sliderEnabled) return;

    setStartIndex((previousIndex) => {
      const safeIndex = Math.min(previousIndex, maxIndex);

      return safeIndex <= 0
        ? maxIndex
        : safeIndex - 1;
    });
  }, [maxIndex, sliderEnabled]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!sliderEnabled) return;

      setStartIndex(
        Math.min(Math.max(index, 0), maxIndex),
      );
    },
    [maxIndex, sliderEnabled],
  );

  useEffect(() => {
    const shouldPause =
      pauseOnHover && isHovered;

    if (
      !autoPlay ||
      !sliderEnabled ||
      shouldPause
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      next();
    }, autoPlayDelay);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    autoPlay,
    autoPlayDelay,
    isHovered,
    next,
    pauseOnHover,
    sliderEnabled,
  ]);

  const itemWidth = useMemo(() => {
    const totalGapWidth =
      gap * (effectiveVisibleItems - 1);

    return `calc(
      (100% - ${totalGapWidth}px) /
      ${effectiveVisibleItems}
    )`;
  }, [effectiveVisibleItems, gap]);

  const transform = `
    translateX(
      calc(
        -${safeStartIndex} *
        (${itemWidth} + ${gap}px)
      )
    )
  `;

  const paginationItems = useMemo(() => {
    return Array.from(
      { length: maxIndex + 1 },
      (_, index) => index,
    );
  }, [maxIndex]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={`
        group/slider
        relative
        w-full
        min-w-0
        ${className}
      `}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-2xl
        "
      >
        <div
          className="
            flex
            will-change-transform
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
          "
          style={{
            gap: `${gap}px`,
            transform,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                min-w-0
                shrink-0
              "
              style={{
                width: itemWidth,
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        {showControls && sliderEnabled && (
          <>
            <button
              type="button"
              onClick={previous}
              aria-label="Previous slide"
              className="
                absolute
                left-3
                top-1/2
                z-20
                hidden
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#102344]/75
                text-white
                opacity-0
                shadow-lg
                shadow-black/15
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-105
                hover:border-white/35
                hover:bg-red-01
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-red-01
                focus-visible:ring-offset-2
                group-hover/slider:opacity-100
                sm:flex
              "
            >
              <ChevronLeft
                size={21}
                strokeWidth={2}
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="
                absolute
                right-3
                top-1/2
                z-20
                hidden
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-[#102344]/75
                text-white
                opacity-0
                shadow-lg
                shadow-black/15
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-105
                hover:border-white/35
                hover:bg-red-01
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-red-01
                focus-visible:ring-offset-2
                group-hover/slider:opacity-100
                sm:flex
              "
            >
              <ChevronRight
                size={21}
                strokeWidth={2}
              />
            </button>

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-10
                hidden
                w-20
                bg-linear-to-r
                from-white/35
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover/slider:opacity-100
                sm:block
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-10
                hidden
                w-20
                bg-linear-to-l
                from-white/35
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover/slider:opacity-100
                sm:block
              "
            />
          </>
        )}
      </div>

      {showDots && sliderEnabled && (
        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
          "
          role="tablist"
          aria-label="Slider navigation"
        >
          {paginationItems.map((index) => {
            const isActive =
              index === safeStartIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  goToSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={
                  isActive ? "true" : undefined
                }
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-red-01
                  focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "w-7 bg-red-01"
                      : `
                        w-2
                        bg-[#102344]/20
                        hover:bg-[#102344]/45
                      `
                  }
                `}
              />
            );
          })}
        </div>
      )}

      {showControls && sliderEnabled && (
        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-3
            sm:hidden
          "
        >
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#102344]/15
              bg-white
              text-[#102344]
              shadow-sm
              transition-all
              duration-300
              hover:border-red-01
              hover:bg-red-01
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-01
            "
          >
            <ChevronLeft
              size={19}
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#102344]/15
              bg-white
              text-[#102344]
              shadow-sm
              transition-all
              duration-300
              hover:border-red-01
              hover:bg-red-01
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-red-01
            "
          >
            <ChevronRight
              size={19}
              strokeWidth={2}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider2;