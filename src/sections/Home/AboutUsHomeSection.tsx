import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import img from "../../assets/AboutUsHomeImage.webp";

export default function AboutUsHomeSection() {
return ( <div className="flex flex-col items-center justify-between gap-16 lg:flex-row"> <div
     data-aos="zoom-in"
     data-aos-duration="650"
     data-aos-easing="ease-out-cubic"
     data-aos-offset="100"
     data-aos-once="true"
     className="relative h-max w-full lg:w-[47.29%] 2xl:w-[47.99%]"
   > <div className="absolute inset-0 rotate-[1.5deg] rounded-2xl bg-white-gray-03" />

    <img
      src={img}
      alt="Loaloat Shatt Al-Arab engineering team"
      className="relative w-full rounded-2xl object-cover"
    />
  </div>

  <div
    data-aos="fade-up"
    data-aos-delay="120"
    data-aos-duration="700"
    data-aos-easing="ease-out-cubic"
    data-aos-offset="100"
    data-aos-once="true"
    className="w-full space-y-5 text-center md:space-y-6 lg:w-[47.29%] lg:text-start 2xl:w-[47.99%] 2xl:space-y-8"
  >
    <h2 className="text-[30px] font-bold text-blue-01 md:text-[40px] 2xl:text-5xl">
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
      className="group relative mx-auto inline-flex items-center gap-2 text-base font-semibold text-red-01 lg:mx-0 md:text-lg 2xl:text-xl"
    >
      <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-red-01 after:transition-all after:duration-300 group-hover:after:w-full">
        Learn more about us
      </span>

      <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  </div>
</div>

);
}
