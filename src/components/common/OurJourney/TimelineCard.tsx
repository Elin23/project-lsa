import type { ElementType } from "react";
import { Expand } from "lucide-react";

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

  return (
    <div
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-duration="650"
      data-aos-delay={delay}
      data-aos-easing="ease-out-cubic"
      data-aos-offset="60"
      data-aos-once="true"
      className={`relative flex items-center md:min-h-37.5 ${
        isLeft ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div
        className={`absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full ${dotColor} ring-4 ring-white shadow-md md:left-1/2`}
      />

      <article
        className="
          group
          relative
          ml-10
          flex
          w-full
          flex-col
          overflow-hidden
          rounded-2xl
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
          sm:flex-row
          md:ml-0
          md:w-[46%]
        "
      >
        {/* الصورة تبقى ظاهرة من دون زيادة كبيرة في حجم البطاقة */}
        {image && (
          <button
            type="button"
            onClick={onImageClick}
            aria-label={`View image for ${title}`}
            className="
              group/image
              relative
              h-24
              w-full
              shrink-0
              cursor-zoom-in
              overflow-hidden
              bg-slate-100
              sm:h-auto
              sm:w-28
              md:w-30
            "
          >
            <img
              src={image}
              alt={imageAlt || title}
              className="
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

        <div className="min-w-0 flex-1 p-5 md:p-6">
          <div className="mb-3 flex items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-blue-50
                text-[#1f3f93]
              "
            >
              <Icon size={18} />
            </div>

            <span className="text-xs font-bold text-[#1f3f93] md:text-sm">
              {year}
            </span>
          </div>

          <h3
            className="
              text-lg
              font-bold
              text-slate-800
              transition-colors
              duration-200
              group-hover:text-[#1f3f93]
              md:text-xl
            "
          >
            {title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>

          <div className="mt-4 border-t border-slate-100 pt-3">
            <span
              className="
                inline-block
                rounded-full
                bg-blue-50
                px-3
                py-1
                text-xs
                font-semibold
                text-[#1f3f93]
                ring-1
                ring-inset
                ring-blue-700/10
              "
            >
              {badge}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}