import { ctaData } from "../../../data/ctaData";
import ButtonComponent from "../ButtonComponent";

const CTASection = () => {
  return (
    <section className="pb-16 md:pb-24 2xl:pb-28">
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-xl
          bg-blue-03
          px-6
          py-12
          text-center
          shadow-lg
          transition-all
          duration-700
          hover:-translate-y-0.5
          hover:shadow-[0_28px_60px_rgba(10,33,90,0.22)]
          md:px-12
          2xl:py-14
        "
      >
        {/* Background Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Vertical Pipelines */}
          <div className="absolute left-[34%] top-0 h-[85%] w-[10px] bg-white/10 transition-opacity duration-700 group-hover:bg-white/[0.13]" />
          <div className="absolute left-[45%] top-0 h-[65%] w-[10px] bg-white/10 transition-opacity duration-700 group-hover:bg-white/[0.13]" />
          <div className="absolute left-[56%] top-0 h-[45%] w-[10px] bg-white/10 transition-opacity duration-700 group-hover:bg-white/[0.13]" />

          {/* Horizontal Dashed Lines */}
          <div className="absolute left-1/2 top-[20%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-opacity duration-700 group-hover:border-white/25" />
          <div className="absolute left-1/2 top-[50%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-opacity duration-700 group-hover:border-white/25" />
          <div className="absolute left-1/2 top-[90%] w-[320px] -translate-x-1/2 border-t border-dashed border-white/15 transition-opacity duration-700 group-hover:border-white/25" />

          {/* Main Circles */}
          <div className="absolute left-[33.3%] bottom-[11%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40" />
          <div className="absolute left-[43.9%] bottom-[33%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40 [animation-delay:700ms]" />
          <div className="absolute left-[55.2%] bottom-[54%] h-8 w-8 animate-pulse rounded-full bg-white/30 transition-all duration-700 group-hover:scale-110 group-hover:bg-white/40 [animation-delay:1400ms]" />

          {/* Horizontal Connectors */}
          <div className="absolute left-[calc(32.3%+22px)] bottom-[13%] h-[10px] w-[360px] bg-white/10 transition-colors duration-700 group-hover:bg-white/[0.13]" />
          <div className="absolute left-[calc(43.2%+22px)] bottom-[35%] h-[10px] w-[360px] bg-white/10 transition-colors duration-700 group-hover:bg-white/[0.13]" />
          <div className="absolute left-[calc(55%+22px)] bottom-[55%] h-[10px] w-[360px] bg-white/10 transition-colors duration-700 group-hover:bg-white/[0.13]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-180 flex-col items-center gap-4 md:gap-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
            {ctaData.label}
          </span>

          <h2 className="max-w-162.5 font-bold text-white text-[28px] leading-9.5 transition-transform duration-700 group-hover:-translate-y-0.5 md:text-[38px] md:leading-11.5 2xl:text-[46px] 2xl:leading-14.5">
            {ctaData.title}
          </h2>

          <p className="max-w-155 leading-7 text-white/80 transition-colors duration-700 group-hover:text-white md:text-lg 2xl:text-[20px]">
            {ctaData.description}
          </p>

          <div className="transition-transform duration-700 group-hover:-translate-y-1">
            <ButtonComponent to={ctaData.buttonLink}>
              {ctaData.buttonText}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;