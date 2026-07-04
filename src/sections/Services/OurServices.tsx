import { useState } from "react";
import { ChevronRight, CheckCircle } from "lucide-react";

import { servicesData2 } from "../../data/servicesData2";

import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import ButtonComponent from "../../components/shared/ButtonComponent";
import LoadMoreButton from "../../components/shared/LoadMoreButton";

const OurServices = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggleServices = () => {
    if (visibleCount >= servicesData2.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, servicesData2.length));
    }
  };

  return (
    <section>
      <TitleComponent
        title="Our Services"
        description="Comprehensive EPC solutions designed for the oil and gas sector. Delivering precision, scale, and uncompromising quality in every project."
      />

      <div className="space-y-8">
        {servicesData2.slice(0, visibleCount).map((service) => (
          <div
            key={service.id}
            className="grid gap-6 rounded-3xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:grid-cols-2"
          >
            <div className={`${service.reverse ? "md:order-2" : "md:order-1"}`}>
              <img
                src={service.image}
                alt={service.title}
                className="h- w-full rounded-lg object-cover md:h-[300px]"
              />
            </div>

            <div
              className={`flex flex-col justify-center ${
                service.reverse ? "md:order-1" : "md:order-2"
              }`}
            >
              <h3 className="text-xl md:text-[22px] 2xl:text-[24px] font-bold text-blue-01">
                {service.title}
              </h3>

              <p className="mt-4 md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5 text-muted-blue">
                {service.description}
              </p>

              <ul className="mt-5 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5 text-muted-blue"
                  >
                    <CheckCircle
                      size={15}
                      className="flex-shrink-0 text-red-600"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <ButtonComponent
                to={`/services/${service.slug}`}
                className="mt-6 w-fit"
                bg="bg-[#1f3f93]"
                hoverBg="hover:bg-red-600"
                icon={<ChevronRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </ButtonComponent>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <LoadMoreButton
          isExpanded={visibleCount >= servicesData2.length}
          onClick={handleToggleServices}
        />
      </div>
    </section>
  );
};

export default OurServices;
