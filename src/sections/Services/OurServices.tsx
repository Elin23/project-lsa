import { ChevronRight, CheckCircle } from "lucide-react";
import { servicesData } from "../../data/servicesData";

const OurServices = () => {
  return (
    <section className="bg-[#f7f7fb] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1f3f93] md:text-4xl">
            Our Services
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Comprehensive EPC solutions designed for the oil and gas sector.
            Delivering precision, scale, and uncompromising quality in every
            project.
          </p>
        </div>

        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="grid gap-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(31,63,147,0.12)] md:grid-cols-2 md:p-6"
            >
              <div
                className={`${
                  service.reverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[230px] w-full rounded-lg object-cover md:h-[260px]"
                />
              </div>

              <div
                className={`flex flex-col justify-center ${
                  service.reverse ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-2xl font-bold text-[#1f3f93] md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle size={15} className="text-red-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-6 flex w-fit items-center gap-1 rounded-full bg-[#1f3f93] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-1 rounded-full bg-[#1f3f93] px-7 py-3 text-sm font-semibold text-white transition hover:bg-red-600">
            Load more
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;