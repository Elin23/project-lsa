import type { ElementType } from "react";

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
      className={`relative flex items-center md:min-h-37.5 ${isLeft ? "md:justify-start" : "md:justify-end"
        }`}
    >
      <div
        className={`absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full ${dotColor} ring-4 ring-white shadow-md md:left-1/2`}
      />

      <div
        className="
          group
          relative
          ml-10
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-slate-100
          bg-white
          shadow-md
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:border-blue-500/20
          hover:shadow-2xl
          md:ml-0
          md:w-[46%]
        "
      >
        {image && (
          <div className="relative h-48 w-full overflow-hidden bg-slate-100 md:h-52">
            <img
              src={image}
              alt={imageAlt || title}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-80" />

            <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-slate-800 shadow-sm border border-white/40">
              <Icon size={14} className="text-[#1f3f93]" />
              <span>{year}</span>
            </div>
          </div>
        )}

        <div className="p-5 md:p-6">
          {!image && (
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1f3f93]">
                <Icon size={18} />
              </div>
              <span className="text-xs font-bold text-[#1f3f93] md:text-sm">
                {year}
              </span>
            </div>
          )}

          <h3 className="text-lg font-bold text-slate-800 transition-colors duration-200 group-hover:text-[#1f3f93] md:text-xl">
            {title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 md:text-base">
            {description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1f3f93] ring-1 ring-inset ring-blue-700/10">
              {badge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}