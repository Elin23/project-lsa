import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TitleComponent from "../../../components/shared/TitleComponent";
import { aboutCompanyContent } from "../../../data/aboutCompanyData";

import aboutCompanyImage1 from "../../../assets/Images/About/AboutLSA/aboutLSA.webp";
import aboutCompanyImage2 from "../../../assets/Images/About/AboutLSA/aboutLSA2.webp";
import aboutCompanyImage3 from "../../../assets/Images/About/AboutLSA/aboutLSA3.webp";
import aboutCompanyImage4 from "../../../assets/Images/About/AboutLSA/aboutLSA4.webp";
import AboutCompanyHighlightItem from "./AboutCompanyHighlightItem";

export interface AboutImageItem {
  id: number;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
}

const aboutImages: AboutImageItem[] = [
  {
    id: 1,
    image: aboutCompanyImage1,
    alt: "Loaloat Shatt Al-Arab engineering team",
    eyebrow: "Engineering Excellence",
    title: "Delivering trusted energy solutions",
  },
  {
    id: 2,
    image: aboutCompanyImage2,
    alt: "LSA industrial engineering operations",
    eyebrow: "Industrial Expertise",
    title: "Executing complex projects safely",
  },
  {
    id: 3,
    image: aboutCompanyImage3,
    alt: "LSA pipeline construction project",
    eyebrow: "Pipeline Solutions",
    title: "Building reliable energy infrastructure",
  },
  {
    id: 4,
    image: aboutCompanyImage4,
    alt: "LSA oil and gas facilities",
    eyebrow: "Energy Infrastructure",
    title: "Supporting Iraq's energy sector",
  },
];

const cardPositions = [
  { x: "0%", y: "3%", scale: 1, rotate: 0, opacity: 1, zIndex: 40 },
  { x: "28%", y: "-12%", scale: 0.74, rotate: 7, opacity: 1, zIndex: 30 },
  { x: "-30%", y: "-1%", scale: 0.78, rotate: -7, opacity: 1, zIndex: 20 },
  { x: "-18%", y: "25%", scale: 0.7, rotate: 5, opacity: 0.95, zIndex: 10 },
];

/**
 * AboutCompanySection Component
 * Renders the main About section featuring dynamic company insights, a stacked image carousel with Framer Motion, and key highlights.
 */
export default function AboutCompanySection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % aboutImages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % aboutImages.length);
  };

  const handlePrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + aboutImages.length) % aboutImages.length);
  };

  const getPositionIndex = (imageIndex: number) => {
    return (imageIndex - activeIndex + aboutImages.length) % aboutImages.length;
  };

  return (
    <section aria-labelledby="about-company-title">
      <div id="about-company-title">
        <TitleComponent
          title={aboutCompanyContent.title}
          description={aboutCompanyContent.description}
        />
      </div>

      <div className="mt-6 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-16 2xl:gap-20">
        {/* Company Overview Text Column */}
        <div data-aos="fade-right" className="max-w-180">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-red-01 lg:justify-start lg:text-start"
          >
            <span className="h-px w-10 bg-red-01" />
            {aboutCompanyContent.eyebrow}
            <span className="block h-px w-10 bg-red-01 lg:hidden" />
          </div>

          <div data-aos="fade-up" data-aos-delay="150" className="mt-7 space-y-6">
            {aboutCompanyContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-8 text-muted-blue md:text-base md:leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Stacked Carousel Column */}
        <div
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
          data-aos-offset="100"
          data-aos-once="true"
          className="relative mx-auto w-full max-w-142.5"
        >
          <div
            className="relative h-107.5 w-full sm:h-125 lg:h-115 xl:h-135"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Decorative background overlay */}
            <div className="absolute inset-x-10 bottom-4 top-12 rounded-4xl bg-white-gray-03" />

            <div className="absolute -right-1 bottom-[10%] grid grid-cols-4 gap-2 opacity-60">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={`dot-${index}`} className="h-1.5 w-1.5 rounded-full bg-red-01" />
              ))}
            </div>

            <AnimatePresence initial={false}>
              {aboutImages.map((item, imageIndex) => {
                const positionIndex = getPositionIndex(imageIndex);
                const position = cardPositions[positionIndex];
                const isActive = positionIndex === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={false}
                    animate={{
                      x: position.x,
                      y: position.y,
                      scale: position.scale,
                      rotate: position.rotate,
                      opacity: position.opacity,
                      zIndex: position.zIndex,
                    }}
                    transition={{
                      x: { type: "spring", stiffness: 140, damping: 22 },
                      y: { type: "spring", stiffness: 140, damping: 22 },
                      scale: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                      rotate: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.45 },
                    }}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(imageIndex);
                      }
                    }}
                    className={`absolute left-1/2 top-1/2 w-[67%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-[5px] border-white bg-white shadow-[0_30px_75px_rgba(15,35,68,0.24)] ${isActive ? "cursor-default" : "cursor-pointer"
                      }`}
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading={isActive ? "eager" : "lazy"}
                        className="aspect-4/5 w-full object-cover"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-blue-01/45 via-transparent to-transparent" />

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: 0.2 }}
                          className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-blue-01/75 px-4 py-3 text-white shadow-lg backdrop-blur-md"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                            {item.eyebrow}
                          </p>

                          <p className="mt-1 text-sm font-semibold md:text-base">
                            {item.title}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3">
              <button
                type="button"
                onClick={handlePrevious}
                aria-label="Previous image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-01/10 bg-white text-blue-01 shadow-[0_10px_30px_rgba(15,35,68,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-01 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2 rounded-full border border-blue-01/10 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,35,68,0.12)]">
                {aboutImages.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${activeIndex === index
                        ? "w-7 bg-red-01"
                        : "w-2 bg-blue-01/20 hover:bg-blue-01/40"
                      }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-01/10 bg-white text-blue-01 shadow-[0_10px_30px_rgba(15,35,68,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-01 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:mt-20 xl:gap-8">
        {aboutCompanyContent.highlights.map((item, index) => (
          <AboutCompanyHighlightItem
            key={item.title}
            item={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}