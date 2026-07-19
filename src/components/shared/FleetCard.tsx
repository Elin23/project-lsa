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
      data-aos="fade"
      data-aos-duration="550"
      data-aos-delay={animationDelay}
      data-aos-easing="ease-out"
      data-aos-offset="40"
      data-aos-once="true"
      className="h-full"
    >
      <article
        className="
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-[#E8EDF5]
          bg-white
          shadow-[0_8px_28px_rgba(31,63,147,0.06)]
          transition-[border-color,box-shadow,background-color]
          duration-300
          ease-out
          hover:border-blue-01/20
          hover:bg-[#FCFDFF]
          hover:shadow-[0_16px_38px_rgba(31,63,147,0.11)]
        "
      >
        {/* Top Accent */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-0
            top-0
            z-20
            h-[3px]
            w-full
            origin-left
            scale-x-0
            bg-red-01
            transition-transform
            duration-300
            ease-out
            group-hover:scale-x-100
          "
        />

        {/* Image */}
        <div className="relative h-[195px] shrink-0 overflow-hidden md:h-[205px]">
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
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.035]
            "
          />

          {/* Image Overlay */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#08162d]/65
              via-[#08162d]/10
              to-transparent
            "
          />

          {/* Glass Availability Tag */}
          <div
            className="
              absolute
              right-3.5
              top-3.5
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/20
              bg-white/12
              px-3
              py-1.5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_8px_22px_rgba(0,0,0,0.14)]
              backdrop-blur-xl
              md:text-[10px]
            "
          >
            <Circle className="h-2 w-2 fill-[#4ADE80] text-[#4ADE80]" />

            Ready to Mobilize
          </div>

          {/* Quantity Glass Tag */}
          <div className="absolute bottom-3.5 left-3.5">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/20
                bg-white/12
                px-3
                py-1.5
                text-[10px]
                font-bold
                text-white
                shadow-[0_8px_22px_rgba(0,0,0,0.14)]
                backdrop-blur-xl
              "
            >
              {quantity} Units
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div>
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-red-01
              "
            >
              Heavy Equipment
            </span>

            <h3
              className="
                mt-1.5
                text-lg
                font-bold
                leading-snug
                text-blue-01
                md:text-xl
              "
            >
              {title}
            </h3>
          </div>

          {/* Details */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div
              className="
                rounded-xl
                border
                border-[#E8EDF5]
                bg-[#F8FAFD]
                p-3.5
                transition-[border-color,background-color]
                duration-300
                ease-out
                group-hover:border-blue-01/15
                group-hover:bg-white
              "
            >
              <div className="flex items-center gap-2">
                <Settings2 className="h-4 w-4 shrink-0 text-blue-01" />

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-slate-400
                    md:text-[10px]
                  "
                >
                  {capacityLabel}
                </p>
              </div>

              <p
                className="
                  mt-2
                  text-[13px]
                  font-bold
                  leading-5
                  text-slate-800
                  md:text-sm
                "
              >
                {capacity}
              </p>
            </div>

            <div
              className="
                rounded-xl
                border
                border-[#E8EDF5]
                bg-[#F8FAFD]
                p-3.5
                transition-[border-color,background-color]
                duration-300
                ease-out
                group-hover:border-blue-01/15
                group-hover:bg-white
              "
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-blue-01" />

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-slate-400
                    md:text-[10px]
                  "
                >
                  Location
                </p>
              </div>

              <p
                className="
                  mt-2
                  text-[13px]
                  font-bold
                  leading-5
                  text-slate-800
                  md:text-sm
                "
              >
                {location}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={onRequest}
              className="
                group/button
                inline-flex
                h-11
                w-full
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-blue-01/20
                bg-blue-01/5
                px-4
                text-sm
                font-bold
                text-blue-01
                transition-[background-color,border-color,color,box-shadow]
                duration-300
                ease-out
                hover:border-blue-01
                hover:bg-blue-01
                hover:text-white
                hover:shadow-[0_8px_20px_rgba(31,63,147,0.15)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-01/25
              "
            >
              Request Availability

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                "
              />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}