import fleetImage from "../../assets/Images/fleet/fleet.webp";

export default function EquipmentFleetSection() {
  return (
    <section>
      <div>
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-[47%]">
            <h2 className="text-[28px] font-bold leading-tight text-blue-01 md:text-[36px] 2xl:text-5xl">
              LSA Equipment Fleet
            </h2>

            <div className="mt-5 h-[3px] w-20 bg-red-01" />

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

          <div className="group relative w-full lg:w-[47%]">
            <div className="absolute inset-0 rounded-3xl bg-white-gray-03 rotate-[1.5deg] transition-transform duration-500 group-hover:rotate-[2.5deg]" />

            <div className="relative overflow-hidden rounded-3xl bg-white-gray-03 p-4 shadow-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
              <img
                src={fleetImage}
                alt="LSA Equipment Fleet"
                className="h-[260px] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.04] md:h-[360px] lg:h-[390px] 2xl:h-[430px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
