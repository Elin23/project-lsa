import { ChevronRight } from "lucide-react";
import ButtonComponent from "../ButtonComponent";

const HotTappingBanner = () => {
  return (
    <section >
      <div className="pb-16 md:pb-24 2xl:pb-28">
        <div className="flex flex-col items-start justify-between gap-10 overflow-hidden rounded-3xl bg-[#28459A] px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:flex-row md:items-center md:px-12 md:py-14">
          {/* Content */}
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#3D5CC3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Specialized Division
            </span>

            <h2 className="mt-2 font-bold text-white text-[28px] leading-9.5 md:text-[38px] md:leading-11.5 2xl:text-[46px] 2xl:leading-14.5 ">
              Hot Tapping up to 42"
            </h2>

            <h3 className="mt-2 font-bold  text-[28px] leading-9.5 md:text-[38px] md:leading-11.5 2xl:text-[46px] 2xl:leading-14.5 text-[#9FC6FF] ">
              — Zero Service Disruption
            </h3>

            <p className="mt-3 md:text-lg leading-7 text-white/80 ">
              Industry-leading intervention techniques that allow for modifications, tie-ins, and repairs on live pipelines without shutting down the system.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
              <ButtonComponent
                // to={service.path}
                className=" w-fit"
                bg="bg-[#FFFFFF] "
                hoverBg="hover:bg-red-600"
                icon={<ChevronRight size={16} />}
                iconPosition="right"
                textColor="text-black hover:text-white" >
                Learn About Hot Tapping
              </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotTappingBanner;