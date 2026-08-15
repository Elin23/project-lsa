import { Autoplay } from "swiper/modules";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import "swiper/css";

import TrustedCompanySkeleton from "../../components/skeletons/TrustedCompanySkeleton";

import type {
  PublicPartner,
} from "../../Types/partner";

import {
  usePublicPartners,
} from "../../hooks/queries/usePartners";

const SKELETON_ITEMS = 5;

const TrustedCompanies = () => {
  const {
    data: partners = [],
    isLoading,
    isError,
  } = usePublicPartners();

  if (!isLoading && !isError && partners.length === 0) {
    return null;
  }

  return (
    <section
      className="pt-16 md:pt-20 lg:pt-24 xl:pt-28"
      id="trusted-companies"
    >
      <div className="mx-auto">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-[4px] text-gray-500">
          Trusted by Industry Leaders
        </h2>

        {isLoading ? (
          <div
            className="
              grid
              grid-cols-2
              gap-2
              sm:grid-cols-3
              sm:gap-3
              lg:grid-cols-4
              lg:gap-4
              xl:grid-cols-5
              xl:gap-4.5
            "
          >
            {Array.from({
              length: SKELETON_ITEMS,
            }).map((_, index) => (
              <TrustedCompanySkeleton
                key={index}
              />
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <h3 className="text-lg font-bold text-red-600">
              Unable to load trusted partners
            </h3>

            <p className="mt-2 text-sm text-red-500">
              Something went wrong while loading partner logos.
            </p>
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            loop={partners.length > 5}
            speed={3000}
            autoplay={
              partners.length > 1
                ? {
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            breakpoints={{
              320: {
                slidesPerView: Math.min(
                  2,
                  partners.length,
                ),
                spaceBetween: 8,
              },
              640: {
                slidesPerView: Math.min(
                  3,
                  partners.length,
                ),
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: Math.min(
                  4,
                  partners.length,
                ),
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: Math.min(
                  5,
                  partners.length,
                ),
                spaceBetween: 18,
              },
            }}
          >
            {partners.map((partner) => (
              <SwiperSlide
                key={partner._id}
              >
                <PartnerLogo
                  partner={partner}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

function PartnerLogo({
  partner,
}: {
  partner: PublicPartner;
}) {
  const logo = (
    <div
      className="
        group
        flex
        h-28.75
        w-full
        items-center
        justify-center
        md:h-31.25
        lg:h-33.75
      "
    >
      <img
        src={partner.logo.url}
        alt="LSA trusted partner"
        loading="lazy"
        decoding="async"
        className="
          block
          h-full
          w-full
          object-contain
          transition-transform
          duration-300
          ease-out
          group-hover:-translate-y-1
          group-hover:scale-[1.04]
        "
      />
    </div>
  );

  if (!partner.website) {
    return logo;
  }

  return (
    <a
      href={partner.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit trusted partner website"
      className="block"
    >
      {logo}
    </a>
  );
}

export default TrustedCompanies;