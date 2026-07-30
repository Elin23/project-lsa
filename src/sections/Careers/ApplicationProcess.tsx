import { useState } from "react";
import { CheckCircle } from "lucide-react";
import TitleComponent from "../../components/common/TitleComponent/TitleComponent";
import { applicationProcessData } from "../../data/applicationProcessData";

const ApplicationProcess = () => {
  const [activeStep, setActiveStep] = useState(1);

  const activeItem = applicationProcessData.find(
    (item) => item.id === activeStep
  );

  if (!activeItem) return null;

  const ActiveIcon = activeItem.icon;

  return (
    <section data-aos="fade-up" data-aos-duration="800"
      className="relative overflow-hidden pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full" id="process"/>

      <div className="relative mx-auto ">
        <TitleComponent
          title="Our Application Process"
          description="A transparent, structured journey toward joining the LSA family."
        />

        <div className="mt-16 rounded-4xl shadow-sm  border border-slate-200 bg-white   md:p-10">
          <div className="relative grid gap-6 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-10.5 hidden h-0.75 rounded-full bg-[#d8e0f3] md:block" />

            <div
              className="absolute left-[12.5%] top-10.5 hidden h-0.75 rounded-full bg-linear-to-r from-blue-01 to-red-01 transition-all duration-500 md:block"
              style={{
                width: `${((activeStep - 1) / 3) * 75}%`,
              }}
            />

            {applicationProcessData.map((item) => {
              const Icon = item.icon;
              const isActive = activeStep === item.id;
              const isDone = item.id < activeStep;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveStep(item.id)}
                  className="group relative cursor-pointer z-10 rounded-2xl p-4 text-center transition duration-300 hover:bg-white/80"
                >
                  <span
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-4 shadow-lg transition-all duration-300 ${isActive
                        ? "scale-110 border-white bg-blue-01 text-white shadow-[0_18px_40px_rgba(30,58,138,0.28)]"
                        : isDone
                          ? "border-white bg-green-800 text-white"
                          : "border-white bg-white text-blue-01"
                      }`}
                  >
                    {isDone ? (
                      <CheckCircle className="h-8 w-8" strokeWidth={2.4} />
                    ) : (
                      <Icon className="h-8 w-8" strokeWidth={2.4} />
                    )}
                  </span>

                  <span
                    className={`mt-5 block text-xs font-bold tracking-[0.25em] ${isActive || isDone ? "text-blue-01" : "text-gray-400"
                      }`}
                  >
                    {item.step}
                  </span>

                  <h3
                    className={`mt-2 text-lg font-bold transition ${isActive ? "text-blue-01" : "text-gray-700"
                      }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {item.shortDescription}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl bg-blue-01 p-8 text-white shadow-[0_20px_50px_rgba(30,58,138,0.22)] md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <ActiveIcon className="h-8 w-8 text-white" strokeWidth={2.4} />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                  {activeItem.step}
                </span>

                <h3 className="mt-2 text-3xl font-bold">
                  {activeItem.title}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;