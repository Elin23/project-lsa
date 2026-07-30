import { useEffect, useState, type ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import AOS from "aos";

import ButtonComponent from "../components/shared/ButtonComponent";

import "swiper/css";
import "aos/dist/aos.css";

interface HeroButton {
  text: string;
  to?: string;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "outline";
}

export interface HeroSlide {
  id: number | string;
  type: "image" | "video";
  src: string;
  poster?: string;
  position?: string;
  autoplayDelay?: number;
}

interface HeroSectionProps {
  slides: HeroSlide[];
  title: string;
  description?: string;
  buttons?: HeroButton[];
  className?: string;
}

const HeroSection = ({
  slides,
  title,
  description,
  buttons = [],
  className = "",
}: HeroSectionProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 0,
      delay: 0,
    });

    AOS.refresh();
  }, []);

  return (
    // id="hero" for floating button hidden on hero section
    <section id="hero" className={`relative left-1/2 min-h-svh w-screen -translate-x-1/2 overflow-hidden bg-[#102344] ${className}`}>
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={slides.length > 1}
          speed={1000}
          grabCursor
          simulateTouch
          allowTouchMove
          followFinger
          touchRatio={1}
          touchAngle={45}
          threshold={5}
          resistance
          resistanceRatio={0.75}
          shortSwipes
          longSwipes
          longSwipesRatio={0.3}
          longSwipesMs={300}
          preventInteractionOnTransition={false}
          touchStartPreventDefault={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          onSlideChange={(swiper: SwiperType) => {
            setActiveSlide(swiper.realIndex);
          }}
          className="hero-background-swiper h-full w-full cursor-grab select-none active:cursor-grabbing"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} data-swiper-autoplay={slide.autoplayDelay ?? 4000} className="relative h-full w-full overflow-hidden">
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload={index === 0 ? "auto" : "metadata"}
                  draggable={false}
                  style={{
                    objectPosition: slide.position ?? "center",
                  }}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] select-none object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden="true"
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  draggable={false}
                  style={{
                    objectPosition: slide.position ?? "center",
                  }}
                  className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] select-none object-cover brightness-[1.02] contrast-[1.08] saturate-[1.03]"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Subtle Blur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-2 backdrop-blur-[1.5px]" />

      {/* General Dark Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-3 bg-[#071225]/50" />

      {/* Vertical Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-4 bg-linear-to-b from-white/8 via-transparent to-[#071225]/70" />

      {/* Side Overlay */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-4 bg-linear-to-r from-[#071225]/20 via-transparent to-[#071225]/16" />

      {/* Upper Lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[22%] z-5 h-80 w-[85%] max-w-5xl -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      {/* Center Lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[48%] z-5 h-56 w-[70%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/7 blur-2xl" />

      {/* Warm Lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[16%] z-5 h-52 w-52 rounded-full bg-amber-100/8 blur-3xl" />

      {/* Hero Content */}
      <div className="pointer-events-none relative z-10 flex min-h-svh flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pb-28 pt-32 text-center sm:px-8 sm:pb-32 md:pt-36 lg:px-10">
          {/* Decorative Accent */}
          <div aria-hidden="true" data-aos="fade-down" data-aos-duration="700" className="mb-4 flex items-center gap-2 sm:mb-5">
            <span className="h-px w-7 bg-white/55 sm:w-9" />

            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-soft-pulse rounded-full bg-red-01" />
              <span className="relative h-2 w-2 rounded-full bg-red-01 shadow-[0_0_12px_rgba(200,16,46,0.85)]" />
            </span>

            <span className="h-px w-7 bg-white/55 sm:w-9" />
          </div>

          {/* Title */}
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="850" className="max-w-210 text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white drop-shadow-[0_3px_16px_rgba(7,18,37,0.45)] sm:text-[36px] md:text-[44px] md:leading-[1.12] lg:text-[50px] xl:text-[56px] 2xl:max-w-240 2xl:text-[60px]">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p data-aos="fade-up" data-aos-delay="220" data-aos-duration="850" className="mt-4 max-w-175 sm:line-clamp-3 md:line-clamp-10 text-[13px] leading-6 text-white/90 drop-shadow-[0_2px_10px_rgba(7,18,37,0.4)] sm:mt-5 sm:text-sm sm:leading-6.5 md:max-w-190 md:text-[15px] md:leading-7 lg:text-base 2xl:max-w-205 2xl:text-[17px]">
              {description}
            </p>
          )}

          {/* Buttons */}
          {buttons.length > 0 && (
            <div data-aos="fade-up" data-aos-delay="340" data-aos-duration="850" className="pointer-events-auto mt-6 flex w-full max-w-95 flex-col items-stretch justify-center gap-3 sm:mt-7 sm:w-auto sm:max-w-none sm:flex-row sm:items-center md:mt-8">
              {buttons.map((button) => {
                const isOutline = button.variant === "outline";

                return (
                  <ButtonComponent
                    key={button.text}
                    to={button.to}
                    href={button.href}
                    icon={button.icon}
                    iconPosition={button.iconPosition}
                    padding="px-5 py-3.5 sm:px-6 md:px-7 md:py-4"
                    fontSize="text-sm md:text-[15px]"
                    fontWeight="font-semibold"
                    bg={isOutline ? "bg-white/12" : "bg-red-01"}
                    hoverBg={isOutline ? "hover:bg-white hover:text-blue-02" : "hover:bg-[#ad0e28]"}
                    textColor="text-white"
                    className={`w-full justify-center backdrop-blur-sm sm:w-auto ${isOutline ? "border border-white/65 shadow-[0_8px_24px_rgba(7,18,37,0.12)] hover:border-white" : "border border-red-01 shadow-[0_10px_25px_rgba(200,16,46,0.2)]"}`}
                  >
                    {button.text}
                  </ButtonComponent>
                );
              })}
            </div>
          )}
        </div>

        {/* Slider Counter */}
        {slides.length > 1 && (
          <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="750" className="pointer-events-none absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-4 sm:bottom-9">
            <span className="min-w-6 text-right text-sm font-semibold tracking-[0.16em] text-white">
              {String(activeSlide + 1).padStart(2, "0")}
            </span>

            <div className="relative h-px w-20 overflow-hidden bg-white/30 sm:w-28">
              <span
                className="absolute inset-y-0 left-0 bg-white transition-[width] duration-500 ease-out"
                style={{
                  width: `${((activeSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>

            <span className="min-w-6 text-sm font-medium tracking-[0.16em] text-white/60">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;