import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { trustedCompaniesData } from "../../data/trustedCompaniesData";

const TrustedCompanies = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28" id="trusted-companies">
      <div className="mx-auto">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-[4px] text-gray-500">
          Trusted by Industry Leaders
        </h2>


        <Swiper
          modules={[Autoplay]}
          loop
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 18,
            },
          }}
        >
          {trustedCompaniesData.map((company) => (
            <SwiperSlide key={company.id}>
              <div
                className="
                  group flex h-[130px] w-full items-center justify-center
                  md:h-[145px]
                  lg:h-[155px]
                "
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="
                    block h-full w-full object-contain
                    transition-transform duration-300 ease-out
                    group-hover:-translate-y-1
                    group-hover:scale-[1.04]
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedCompanies;