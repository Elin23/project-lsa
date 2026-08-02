import {
  ArrowRight,
  Circle,
  MapPin,
  Settings2,
} from "lucide-react";

import type { FleetItem } from "../../data/fleetData";

interface FleetCardProps extends FleetItem {
  onRequest: () => void;
  animationDelay?: number;
}

export default function FleetCard({
  image,
  title,
  quantity,
  capacityLabel = "Capacity",
  capacity,
  location,
  onRequest,
  animationDelay = 0,
}: FleetCardProps) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay={animationDelay}
      data-aos-easing="ease-out"
      data-aos-offset="35"
      data-aos-once="true"
      className="h-full"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-xl
          border
          border-slate-200/80
          bg-white
          shadow-[0_5px_18px_rgba(31,63,147,0.05)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(31,63,147,0.15)]
        "
      >
        {/* Image */}
        <div className="relative h-36 shrink-0 overflow-hidden sm:h-38">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              h-full
              w-full
              object-cover
               transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#08162d]/50
              via-transparent
              to-transparent
            "
          />

          {/* Availability */}
          <div
            className="
              absolute
              right-2.5
              top-2.5
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/70
              bg-white/95
              px-2.5
              py-1
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.04em]
              text-slate-600
              shadow-sm
            "
          >
            <Circle className="h-1.5 w-1.5 fill-green-500 text-green-500" />

            Ready to Mobilize
          </div>

          {/* Quantity */}
          <span
            className="
              absolute
              bottom-2.5
              left-2.5
              rounded-md
              border
              border-white/30
              bg-blue-01
              px-2.5
              py-1
              text-[9px]
              font-bold
              text-white
              shadow-sm
            "
          >
            {quantity} Units
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          {/* Heading */}
          <div>
            <span
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-red-01
              "
            >
              Heavy Equipment
            </span>

            <h3
              className="
                mt-0.5
                text-base
                font-bold
                leading-snug
                text-blue-01
                md:text-[17px]
              "
            >
              {title}
            </h3>
          </div>

          {/* Details */}
          <div
            className="
              mt-3
              grid
              grid-cols-2
              divide-x
              divide-slate-200
              border-y
              border-slate-100
              py-2.5
            "
          >
            <div className="flex min-w-0 items-start gap-2 pr-3">
              <Settings2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-01" />

              <div className="min-w-0">
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.06em]
                    text-slate-400
                  "
                >
                  {capacityLabel}
                </p>

                <p
                  className="
                    mt-0.5
                    line-clamp-2
                    text-[11px]
                    font-semibold
                    leading-4
                    text-slate-700
                    sm:text-xs
                  "
                >
                  {capacity}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-start gap-2 pl-3">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-01" />

              <div className="min-w-0">
                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.06em]
                    text-slate-400
                  "
                >
                  Location
                </p>

                <p
                  className="
                    mt-0.5
                    line-clamp-2
                    text-[11px]
                    font-semibold
                    leading-4
                    text-slate-700
                    sm:text-xs
                  "
                >
                  {location}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={onRequest}
            className="
    group/button
    mt-3
    inline-flex
    h-9
    w-full
    cursor-pointer
    items-center
    justify-center
    gap-1.5
    rounded-lg
    border
    border-blue-01/15
    bg-blue-01/5
    px-3
    text-[11px]
    font-bold
    text-blue-01
    shadow-sm
    transition-all
    duration-300
    ease-out
    hover:-translate-y-0.5
    hover:border-blue-01/30
    hover:bg-blue-01/10
    hover:shadow-md
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-blue-01/20
    focus-visible:ring-offset-2
  "
          >
            Request Availability

            <ArrowRight
              className="
      h-3.5
      w-3.5
      transition-transform
      duration-300
      group-hover/button:translate-x-1
    "
            />
          </button>
        </div>
      </article>
    </div>
  );
}