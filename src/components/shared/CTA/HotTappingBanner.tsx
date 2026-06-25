import { ChevronRight } from "lucide-react";
import ButtonComponent from "../ButtonComponent";

const HotTappingBanner = () => {
  return (
    <section >
      <div className=" pb-20">
        <div className="flex flex-col items-start justify-between gap-10 overflow-hidden rounded-[28px] bg-[#28459A] px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:flex-row md:items-center md:px-12 md:py-14">
          {/* Content */}
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#3D5CC3] px-4 py-2 text-[11px] font-semibold uppercase tracking-[2px] text-white">
              Specialized Division
            </span>

            <h2 className="mt-6 text-xl md:text-4xl font-bold leading-tight text-white lg:text-5xl">
              Hot Tapping up to 42"
            </h2>

            <h3 className="mt-2 text-xl md:text-4xl font-bold leading-tight text-[#9FC6FF] lg:text-5xl">
              — Zero Service Disruption
            </h3>

            <p className="mt-3 md:mt-6 max-w-2xl text-sm md:text-lg leading-6 md:leading-8 text-white/85">
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