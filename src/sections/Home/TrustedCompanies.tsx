import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { trustedCompaniesData } from "../../data/trustedCompaniesData";

const TrustedCompanies = () => {
    return (
        <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28">
            <div className="mx-auto px-4">
                <h2 className="mb-10 text-center text-sm font-semibold uppercase tracking-[4px] text-gray-500">
                    Trusted by Industry Leaders
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                        1280: {
                            slidesPerView: 7,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {trustedCompaniesData.map((company) => (
                        <SwiperSlide key={company.id}>
                            <div className="flex items-center justify-center">
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="h-21.25 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
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