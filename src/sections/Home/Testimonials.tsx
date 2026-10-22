import Slider from "../../components/shared/Slider";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
        <Slider
          items={testimonialsData}
          renderItem={(active) => (
            <div className="flex flex-col items-center">
              {/* Person Image */}
              <div className="mb-6 overflow-hidden rounded-full shadow-lg
                              h-32 w-32
                              sm:h-36 sm:w-36
                              lg:h-28 lg:w-28">
                <img
                  src={active.image}
                  alt={active.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Name */}
              <h2 className="text-[22px] font-bold leading-tight text-[#111b3f]
                             sm:text-2xl
                             lg-custom:text-2xl">
                {active.name}
              </h2>

              {/* Position */}
              <h3 className="mt-2 text-base font-semibold leading-snug text-[#111b3f]
                             sm:text-lg
                             lg-custom:text-xl">
                {active.position}
              </h3>

              {/* Company */}
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[1.3px] text-gray-500
                            sm:text-xs
                            huge:text-sm">
                {active.company}
              </p>

              {/* Quote */}
              <div className="relative mt-7 w-full max-w-[92%] sm:max-w-2xl lg:max-w-3xl">
                <span className="absolute -left-1 -top-6 text-5xl font-serif leading-none text-blue-01/20 sm:text-6xl">
                  “
                </span>

                <p className="relative text-[17px] font-medium italic leading-[1.65] text-blue-01
                              sm:text-xl sm:leading-[1.6]
                              lg-custom:text-[24px]
                              huge:text-[30px] huge:leading-[1.45]">
                  {active.quote}
                </p>

                <span className="absolute -bottom-9 -right-1 text-5xl font-serif leading-none text-blue-01/20 sm:text-6xl">
                  ”
                </span>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Testimonials;