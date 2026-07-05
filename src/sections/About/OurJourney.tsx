import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { timelineData } from "../../data/timelineData";

const OurJourney = () => {
  return (
    <section>
      <div>
        <TitleComponent
          title="Our Journey"
          description="Tracing our evolution through milestone achievements and continuous commitment to engineering excellence."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-indigo-100 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-8">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";

              return (
                <div
                  key={index}
                  className={`relative flex items-center md:min-h-[150px] ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full ${item.dotColor} md:left-1/2`}
                  />

                  <div
                    className="
                      ml-10
                      w-full
                      rounded-xl
                      border
                      border-transparent
                      bg-white
                      p-5
                      shadow-md
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-2
                      hover:border-blue-01/20
                      hover:shadow-2xl
                      md:ml-0
                      md:w-[46%]
                      md:p-7
                    "
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Icon size={20} className="text-[#1f3f93]" />

                      <span className="text-[12px] md:text-sm 2xl:text-base font-bold text-blue-02">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-blue-01 text-xl md:text-[22px] 2xl:text-[24px] font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-5 md:text-base md:leading-6 2xl:text-base 2xl:leading-6.5 text-muted-blue">
                      {item.description}
                    </p>

                    <span className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-03">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;