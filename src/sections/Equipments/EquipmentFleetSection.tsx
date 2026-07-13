import fleetImage from "../../assets/Images/fleet/fleet.webp";

export default function EquipmentFleetSection() {
  return (
    <section>
      <div
        className="
          flex
          flex-col
          items-center
          justify-between
          gap-12
          lg:flex-row
          lg:gap-16
        "
      >
        {/* Content */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out-cubic"
          data-aos-offset="60"
          data-aos-once="true"
          className="w-full lg:w-[47%]"
        >
          <h2 className="text-[28px] font-bold leading-tight text-blue-01 md:text-[36px] 2xl:text-5xl">
            LSA Equipment Fleet
          </h2>

          <div className="mt-5 h-[3px] w-20 rounded-full bg-red-01" />

          <div className="mt-6 space-y-5 text-base leading-7 text-muted-blue md:text-lg md:leading-8">
            <p>
              At Laaloat Shatt Al-Arab (LSA), we believe that project success
              is built on a foundation of reliability and autonomy. Unlike
              many firms that rely on third-party leasing, LSA owns a
              comprehensive fleet of heavy equipment and specialized
              machinery.
            </p>

            <p>
              Our main operations yard in Basra serves as the central hub for
              maintenance, mobilization, and technical support. Every unit in
              our fleet undergoes rigorous preventive maintenance programs to
              ensure zero downtime on critical oil and gas project sites.
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          data-aos="fade"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-easing="ease-out"
          data-aos-offset="60"
          data-aos-once="true"
          className="w-full lg:w-[47%]"
        >
          <div className="group relative">
            <div
              className="
                absolute
                inset-0
                rotate-[1.5deg]
                rounded-3xl
                bg-white-gray-03
                transition-transform
                duration-500
                ease-out
                group-hover:rotate-[2deg]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#E8EDF5]
                bg-white
                p-3
                shadow-[0_12px_35px_rgba(31,63,147,0.10)]
                transition-[border-color,box-shadow]
                duration-300
                ease-out
                group-hover:border-blue-01/15
                group-hover:shadow-[0_20px_45px_rgba(31,63,147,0.14)]
                md:p-4
              "
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={fleetImage}
                  alt="LSA Equipment Fleet"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.035]
                    md:h-[360px]
                    lg:h-[390px]
                    2xl:h-[430px]
                  "
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#08162d]/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}