import { ChevronRight } from "lucide-react";
import ButtonComponent from "../ButtonComponent";

const HotTappingBanner = () => {
  return (
    <section>
      <div className="pb-16 md:pb-24 2xl:pb-28">
        <div
          data-aos="fade-up"
          data-aos-duration="650"
          data-aos-easing="ease-out-cubic"
          data-aos-offset="80"
          data-aos-once="true"
          className="
            group
            relative
            overflow-hidden
            rounded-[28px]
            bg-[#28459A]
            px-8
            py-10
            shadow-[0_20px_50px_rgba(0,0,0,0.18)]
            transition-all
            duration-700
            hover:-translate-y-0.5
            hover:shadow-[0_28px_60px_rgba(10,33,90,0.22)]
            md:flex
            md:items-center
            md:justify-between
            md:px-12
            md:py-14
          "
        >
          {/* Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Vertical Pipelines */}
            <div className="absolute left-[34%] top-0 h-[85%] w-2.5 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />
            <div className="absolute left-[45%] top-0 h-[65%] w-2.5 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />
            <div className="absolute left-[56%] top-0 h-[45%] w-2.5 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />

            {/* Horizontal Dashed Lines */}
            <div className="absolute left-1/2 top-[20%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-colors duration-700 group-hover:border-white/25" />
            <div className="absolute left-1/2 top-[50%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-colors duration-700 group-hover:border-white/25" />
            <div className="absolute left-1/2 top-[90%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-colors duration-700 group-hover:border-white/25" />

            {/* Main Circles */}
            <div className="absolute left-[33.3%] bottom-[11%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40" />
            <div className="absolute left-[43.9%] bottom-[33%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40 [animation-delay:700ms]" />
            <div className="absolute left-[55.2%] bottom-[54%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40 [animation-delay:1400ms]" />

            {/* Horizontal Connectors */}
            <div className="absolute left-[calc(32.3%+22px)] bottom-[13%] h-2.5 w-90 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />
            <div className="absolute left-[calc(43.2%+22px)] bottom-[35%] h-2.5 w-90 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />
            <div className="absolute left-[calc(55%+22px)] bottom-[55%] h-2.5 w-90 bg-white/10 transition-colors duration-700 group-hover:bg-white/13" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex rounded-full bg-[#3D5CC3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Specialized Division
            </span>

            <h2
              className="
                mt-2
                text-[28px]
                font-bold
                leading-9.5
                text-white
                transition-transform
                duration-700
                group-hover:-translate-y-0.5
                md:text-[38px]
                md:leading-11.5
                2xl:text-[46px]
                2xl:leading-14.5
              "
            >
              Hot Tapping up to 42&quot;
            </h2>

            <h3
              className="
                mt-2
                text-[28px]
                font-bold
                leading-9.5
                text-[#9FC6FF]
                transition-colors
                duration-700
                group-hover:text-[#C4DEFF]
                md:text-[38px]
                md:leading-11.5
                2xl:text-[46px]
                2xl:leading-14.5
              "
            >
              — Zero Service Disruption
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-white/80
                transition-colors
                duration-700
                group-hover:text-white
                md:text-lg
              "
            >
              Industry-leading intervention techniques that allow for
              modifications, tie-ins, and repairs on live pipelines without
              shutting down the system.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 mt-8 shrink-0 transition-transform duration-700 group-hover:-translate-y-1 md:mt-0">
            <ButtonComponent
              className="w-fit"
              bg="bg-white"
              hoverBg="hover:bg-red-600"
              icon={<ChevronRight size={16} />}
              iconPosition="right"
              textColor="text-black hover:text-white"
            >
              Learn About Hot Tapping
            </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTappingBanner;