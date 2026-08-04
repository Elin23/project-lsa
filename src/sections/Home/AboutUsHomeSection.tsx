import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import img from "../../assets/AboutUsHomeImage.webp";

/**
 * AboutUsHomeSection Component
 * Renders the homepage "About Us" section highlighting local roots & global standards.
 * Enhanced with smooth cinematic image hover effects.
 */
export default function AboutUsHomeSection() {
  return (
    <section
      id="homeAbout"
      className="flex flex-col items-center justify-between gap-16 lg:flex-row"
      aria-labelledby="home-about-heading"
    >
      {/* Visual Image Container with Enhanced Dynamic Hover Effect */}
      <div
        data-aos="zoom-in"
        data-aos-duration="650"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="100"
        data-aos-once="true"
        className="group relative h-max w-full lg:w-[47.29%] 2xl:w-[47.99%]"
      >
        {/* Background Accent Card - Dynamic Rotation on Hover */}
        <div
          className="absolute inset-0 rotate-[1.5deg] rounded-2xl bg-white-gray-03 transition-transform duration-500 ease-out group-hover:rotate-[3.5deg] group-hover:scale-[1.02]"
          aria-hidden="true"
        />

        {/* Image Mask Wrapper */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={img}
            alt="Loaloat Shatt Al-Arab engineering team working on site"
            fetchPriority="high"
            decoding="async"
            className="relative h-auto w-full rounded-2xl object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />

          {/* Light Sweep/Glow Effect on Hover */}
          <div className="pointer-events-none absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-linear-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ease-in-out group-hover:left-full" />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        data-aos="fade-up"
        data-aos-delay="120"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="100"
        data-aos-once="true"
        className="w-full space-y-5 text-center md:space-y-6 lg:w-[47.29%] lg:text-start 2xl:w-[47.99%] 2xl:space-y-8"
      >
        <h2
          id="home-about-heading"
          className="text-[30px] font-bold text-blue-01 md:text-[40px] 2xl:text-5xl"
        >
          Local Roots. Global Standards.
        </h2>

        <p className="font-normal text-muted-blue md:text-base 2xl:text-[18px]">
          Loaloat Shatt Al-Arab (LSA) combines deep local knowledge with
          uncompromising international quality standards. We are the trusted
          partner for complex engineering challenges in Iraq&apos;s most
          demanding environments.
        </p>

        <Link
          to="/about"
          aria-label="Learn more about Loaloat Shatt Al-Arab"
          className="group/link relative mx-auto inline-flex items-center gap-2 text-base font-semibold text-red-01 md:text-lg lg:mx-0 2xl:text-xl"
        >
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover/link:after:w-full">
            Learn more about us
          </span>

          <GoArrowRight
            aria-hidden="true"
            focusable="false"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}