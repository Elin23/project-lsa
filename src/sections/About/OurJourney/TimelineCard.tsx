import {
  useEffect,
  useRef,
  useState,
  type ElementType,
} from "react";
import {
  ChevronDown,
  ChevronUp,
  Expand,
} from "lucide-react";

interface TimelineCardProps {
  year: string;
  title: string;
  description: string;
  badge: string;
  dotColor: string;
  side: "left" | "right";
  icon: ElementType;
  delay?: number;
  image?: string;
  imageAlt?: string;
  onImageClick?: () => void;
}

export default function TimelineCard({
  year,
  title,
  description,
  badge,
  dotColor,
  side,
  icon: Icon,
  delay = 0,
  image,
  imageAlt,
  onImageClick,
}: TimelineCardProps) {
  const isLeft = side === "left";

  const [isExpanded, setIsExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const descriptionElement = descriptionRef.current;

    if (!descriptionElement) return;

    const checkOverflow = () => {
      if (isExpanded) {
        setCanExpand(true);
        return;
      }

      const isOverflowing =
        descriptionElement.scrollHeight >
        descriptionElement.clientHeight + 1;

      setCanExpand(isOverflowing);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);

    resizeObserver.observe(descriptionElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [description, isExpanded]);

  const handleToggleDescription = () => {
    setIsExpanded((previousValue) => !previousValue);
  };

  return (
    <div
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-duration="650"
      data-aos-delay={delay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
      className={`
        relative
        flex
        items-center
        md:min-h-37.5
        ${isLeft ? "md:justify-start" : "md:justify-end"}
      `}
    >
      {/* Timeline Dot */}
      <div
        className={`
          absolute
          left-3
          top-8
          z-20
          h-3.5
          w-3.5
          -translate-x-1/2
          rounded-full
          ring-4
          ring-white
          shadow-md
          min-[350px]:left-4
          min-[350px]:h-4
          min-[350px]:w-4
          md:left-1/2
          ${dotColor}
        `}
      />

      <article
        className="
          group
          relative
          ml-7
          flex
          w-[calc(100%-1.75rem)]
          min-w-0
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-slate-100
          bg-white
          shadow-md
          transition-all
          duration-300
          ease-out
          hover:-translate-y-1
          hover:border-blue-500/20
          hover:shadow-xl
          min-[350px]:ml-10
          min-[350px]:w-[calc(100%-2.5rem)]
          min-[350px]:flex-row
          min-[350px]:items-stretch
          min-[420px]:rounded-2xl
          md:ml-0
          md:w-[46%]
        "
      >
        {/* Image */}
        {image && (
          <button
            type="button"
            onClick={onImageClick}
            aria-label={`View image for ${title}`}
            className="
              group/image
              relative
              h-32
              w-full
              shrink-0
              cursor-zoom-in
              overflow-hidden
              bg-slate-100
              min-[350px]:h-auto
              min-[350px]:min-h-full
              min-[350px]:w-24
              min-[400px]:w-28
              sm:w-36
              md:w-44
            "
          >
            <img
              src={image}
              alt={imageAlt || title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-500
                ease-out
                group-hover/image:scale-105
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/10
                transition-colors
                duration-300
                group-hover/image:bg-black/25
              "
            />

            <span
              className="
                absolute
                bottom-2
                right-2
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-black/55
                text-white
                opacity-90
                backdrop-blur-sm
                transition-all
                duration-300
                group-hover/image:scale-105
                group-hover/image:bg-blue-01
              "
            >
              <Expand size={14} />
            </span>
          </button>
        )}

        {/* Content */}
        <div
          className="
            flex
            min-w-0
            flex-1
            flex-col
            justify-center
            p-3.5
            min-[350px]:p-3
            min-[400px]:p-4
            sm:p-5
            md:p-5
          "
        >
          <div
            className="
              mb-2
              flex
              min-w-0
              items-center
              gap-2
              min-[400px]:mb-2.5
            "
          >
            <div
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-md
                bg-blue-50
                text-[#1f3f93]
                min-[400px]:h-8
                min-[400px]:w-8
                min-[400px]:rounded-lg
              "
            >
              <Icon
                size={16}
                className="min-[400px]:h-[18px] min-[400px]:w-[18px]"
              />
            </div>

            <span
              className="
                min-w-0
                truncate
                text-[11px]
                font-bold
                text-[#1f3f93]
                min-[350px]:text-xs
                md:text-sm
              "
            >
              {year}
            </span>
          </div>

          <h3
            className="
              break-words
              text-sm
              font-bold
              leading-snug
              text-slate-800
              transition-colors
              duration-200
              group-hover:text-[#1f3f93]
              min-[350px]:text-[15px]
              min-[400px]:text-base
              sm:text-lg
              md:text-xl
            "
          >
            {title}
          </h3>

          <div className="mt-1.5 min-w-0 min-[400px]:mt-2">
            <p
              ref={descriptionRef}
              className={`
                break-words
                text-[11px]
                leading-5
                text-slate-600
                transition-all
                duration-300
                min-[350px]:text-xs
                min-[400px]:leading-relaxed
                sm:text-sm
                md:text-base
                ${isExpanded ? "" : "line-clamp-3"}
              `}
            >
              {description}
            </p>

            {(canExpand || isExpanded) && (
              <button
                type="button"
                onClick={handleToggleDescription}
                aria-expanded={isExpanded}
                className="
                  mt-1.5
                  inline-flex
                  max-w-full
                  items-center
                  gap-1
                  text-[11px]
                  font-semibold
                  text-[#1f3f93]
                  transition-colors
                  duration-200
                  hover:text-[#142d6e]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#1f3f93]/25
                  min-[350px]:text-xs
                  sm:mt-2
                  sm:text-sm
                "
              >
                <span>
                  {isExpanded ? "Show less" : "Read more"}
                </span>

                {isExpanded ? (
                  <ChevronUp
                    size={14}
                    className="shrink-0 sm:h-4 sm:w-4"
                  />
                ) : (
                  <ChevronDown
                    size={14}
                    className="shrink-0 sm:h-4 sm:w-4"
                  />
                )}
              </button>
            )}
          </div>

          <div
            className="
              mt-2.5
              min-w-0
              border-t
              border-slate-100
              pt-2.5
              min-[400px]:mt-3
              min-[400px]:pt-3
            "
          >
            <span
              className="
                inline-block
                max-w-full
                truncate
                rounded-full
                bg-blue-50
                px-2.5
                py-1
                text-[10px]
                font-semibold
                text-[#1f3f93]
                ring-1
                ring-inset
                ring-blue-700/10
                min-[350px]:text-[11px]
                min-[400px]:px-3
                min-[400px]:text-xs
              "
              title={badge}
            >
              {badge}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}